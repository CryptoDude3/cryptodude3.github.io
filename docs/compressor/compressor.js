function generateAst(inptext){return acorn.parse(inptext);}
function compress(code){return Eval(generateAst(code));}
function Eval(e){
switch(e.type){
case "Program":
return blk(e.body.map(e=>Eval(e)));
break;
case "CallExpression":
var args = e.arguments.map(e=>Eval(e));
return call(Eval(e.callee),args);
break;
case "ExpressionStatement":
return Eval(e.expression);
break;
case "BlockStatement":
return blk(e.body.map(e=>Eval(e)));
break;
case "VariableDeclaration":
return blk(e.declarations.map(e=>Eval(e)));
break;
case "VariableDeclarator":
var vname = Eval(e.id);
if(e.id.type==="Identifier"){vname = str(e.id.name);}
var init;
if(e.init){init=Eval(e.init);}else{init=null;}
return declvar(vname,e.kind==="const",init);
break;
case "Identifier":
return gvar(e.name);
break;
case "BinaryExpression":
return op(Eval(e.left),str(e.operator),Eval(e.right));
break;
case "LogicalExpression":
return op(Eval(e.left),str(e.operator),Eval(e.right));
break;
case "IfStatement":
var haselse=false,runelse;
if(e.alternate){haselse=true;runelse=Eval(e.alternate);}
return ifstmt(Eval(e.test),Eval(e.consequent),haselse,runelse);
break;
case "ForStatement":
return forstmt(Eval(e.init),Eval(e.test),Eval(e.update),Eval(e.body));
break;
case "UpdateExpression":
return assignexpr(Eval(e.argument),str((e.operator=="++")?"+=":"-="),prim(1));
break;
case "AssignmentExpression":
return assignexpr(Eval(e.left),str(e.operator),Eval(e.right));
break;
case "BreakStatement":
return `\x1a`;
break;
case "ObjectExpression":
return obj(e.properties.map(e=>Eval(e)));
break;
case "Property":
return [str(e.key.name),Eval(e.value)];
break;
case "Literal":
return prim(e.value);
break;
case "UnaryExpression":
return prefixexpr(str(e.operator),Eval(e.argument));
break;
case "MemberExpression":
var prop = Eval(e.property);
if(e.property.type==="Identifier"){prop = str(e.property.name);}
return memb(Eval(e.object),prop);
break;
case "FunctionExpression":
return funcexpr("",e.params.map(a=>a.name),Eval(e.body));
break;
case "FunctionDeclaration":
return funcexpr(e.id.name,e.params.map(a=>a.name),Eval(e.body));
break;
case "ReturnStatement":
return retstmt(e.argument?Eval(e.argument):null);
break;
case "ArrowFunctionExpression":
return funcexpr("",e.params.map(a=>a.name),Eval(e.body));
break;
case "ConditionalExpression":
return ternexpr(Eval(e.test),Eval(e.consequent),Eval(e.alternate));
break;
default:
throw "Unrecognized type: " + e.type;
break;
}
}












//ASM CODE ----------------------------------------
function blk(st){
    var ret = `\x10${String.fromCharCode(st.length)}`;
    st.forEach(e=>ret+=e);
    return ret;
}
function gvar(vn){
return `\x03${String.fromCharCode(vn.length)}${vn}`
}
function str(vn){
return `\x02${String.fromCharCode(vn.length)}${vn}`
}
function call(func,args){
var ret = `\n${func}${String.fromCharCode(args.length)}`;
args.forEach(e=>ret+=e);
return ret;
}
function mpath(p){
var a = p.split(".");
var ret = "";
switch(a.length){
case 0: throw "invalid path";break;
case 1: ret=gvar(a[0]);break;
case 2: ret=memb(gvar(a[0]),str(a[1]));break;
default:
ret = memb(gvar(a[0]),str(a[1]));
for(var i = 2;i<a.length;i++){
    ret=memb(ret,str(a[i]));
}
}
return ret;
}
function prim(inpv){
var rval;
switch(typeof inpv){
case "string":
rval = str(inpv);
break;
case "number":
rval = num(inpv);
break;
case "object":
rval = obj(inpv);
break;
default:
rval = str(inpv?.toString());
break;
}
return rval;
}
function memb(a,b){
return `\v${a}${b}`;
}
//name, isconstant, value
function declvar(name, ic, val){
var isNull = val===null;
var ret = `\x12${name}${String.fromCharCode(ic?1:0)}${String.fromCharCode(isNull?0:1)}`;
if(!isNull){ret+=val;}
return ret;
}
function num(n){
const fnum = n.toString();
return `\x01${String.fromCharCode(fnum.length)}${fnum}`;
}
function obj(a){
var ret = `\x08${String.fromCharCode(a.length)}`;
a.forEach(b=>{
ret+=b[0];
ret+=b[1];
});
return ret;
}
//use is like op(num(2),str(">"),num(3)); returns false
function op(left,mid,right){
return `\x04${left}${mid}${right}`;
}
function ifstmt(cond,runif,haselse,runelse){
var stmt = `\x16${cond}${runif}\x1e${String.fromCharCode(haselse?1:0)}`;
if(haselse){stmt+=`\x17${runelse}\x1f`;}
return stmt;
}
function forstmt(first,cond,incr,run){
return `\x15${first}${cond}${run}\x23${incr}\x1c`;
}
function assignexpr(left,operator,val){
return `\x07${left}${operator}${val}`
}
function prefixexpr(operator,v){
return `\x05${operator}${v}`;
}
//"name", ["arg1","arg2"], Eval(run)
function funcexpr(name,args,run){
var ret = `\x0e${str(name)}${String.fromCharCode(args.length)}`;
args.forEach(e=>{ret+=str(e);});
ret+=`${run}\x1b`;
return ret;
}
function retstmt(arg){
var ret =  `\x18${String.fromCharCode(arg?1:0)}`;
if(arg){ret+=arg;}
return ret;
}
function ternexpr(cond,runtrue,runfalse){
return `\x0d${cond}\x20${runtrue}\x21${runfalse}\x22`;
}