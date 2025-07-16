let scoreOffset = 46228952;
let gameManager = 46228896; //read32(read32(41730808+0x5c)) dynamic offset

function set_UseGravity(rb, val) {
    gameInstance.Module.dynCall_viii(1922, BallRb, val ? 1 : 0);
}

function readFsms() {
    return readList(gameInstance.Module.dynCall_iii(3073)).map(e => readFsm(e));
}

function readFsmEvents() {
    return readList(30727264).map(e => readFsmEvent(e));
}

function readClassName(il2cppobjectptr) {
    return readChar(read32(read32(il2cppobjectptr) + 0x8));
}

function readClassNamespace(il2cppobjectptr) {
    return readChar(read32(read32(il2cppobjectptr) + 0xc));
}

function readVtableptr(ptr, slot) {
    return read32(read32(ptr) + 0xb8 + (8 * (slot - 1)) + 0x4);
}

function get_component(gameobject, type) {
    return gameInstance.Module.dynCall_iiii(1522, gameobject, type);
}

function getRandState() {
    return [read32(0x1ea000), read32(0x1ea004), read32(0x1ea008), read32(0x1ea00c)];
}

function getGameManager(){
    return read32(read32(41730808 + 0x5c));
}

function setRandState(val) {
    if (val.length !== 4) {
        throw "Must have 4 states!";
    }
    set32(0x1ea000, val[0]);
    set32(0x1ea004, val[1]);
    set32(0x1ea008, val[2]);
    set32(0x1ea00c, val[3]);
}

function readFsmRandWeights(fsmstate) {
    readFullArr(read32(fsmstate + 0x2c)).map(e => ({
        val: readFloat32(e + 0x18),
        ptr: e + 0x18
    }));
}


window.keys = [];
document.addEventListener("keydown", e => {
    if (keys.indexOf(e.keyCode) == -1) {
        keys.push(e.keyCode);
    }
});
document.addEventListener("keyup", e => {
    keys.splice(keys.indexOf(e.keyCode), 1)
});

function addSpeedUp() {
    setFloat32(readFloat32(SteerForceRight) + 100);
    setFloat32(readFloat32(SteerForceLeft) - 100);
    setFloat32(readFloat32(yForce) - 300);
    setFloat32(readFloat32(zForce) + 30);
}

function readChar(ptr) {
    let i = 0;
    let out = "";
    while (read8(ptr + i) != 0) {
        out += String.fromCharCode(read8(ptr + i));
        i++;
        if (i > 100) {
            return null;
        }
    }
    return out;
}

function readList(ptr) {
    let list = [];
    let len = gameInstance.Module.dynCall_iii(4408, ptr);
    for (var i = 0; i < len; i++) {
        list.push(gameInstance.Module.dynCall_iiii(2392, ptr, i));
    }
    return list;
}

function death() {
    gameInstance.Module.dynCall_viiii(1155, 0, 30726088);
}

window.nowPatch = false;

function writeChar(value) {
    const ptr = gameInstance.Module._malloc(value.length + 1);
    gameInstance.Module.writeAsciiToMemory(value, ptr);
    return ptr;
}

function createString(value) {
    let ptr = gameInstance.Module._malloc(0xC + value.length * 2);
    writeString(ptr, value);
    return ptr;
}

function free(ptr) {
    gameInstance.Module._free(ptr);
}

function get_GameObject(name) {
    let str = createString(name);
    let GameObject = gameInstance.Module.dynCall_iiii(1532, 0, str);
    free(str);
    return GameObject;
}

function get_PlayMakerFSM(gameObject, fsmName = "FSM") {
    let ptr = createString("FSM");
    let ret = gameInstance.Module.dynCall_iiiii(3376, 0, gameObject, ptr);
    free(ptr);
    return ret;
}

function getGameObjectName(ptr) {
    const out = gameInstance.Module.dynCall_iii(2477, ptr)
    return readString(out);
}

function readGameObject(ptr) {
    return {
        name: getGameObjectName(ptr),
        ptr
    };
}

function onPress(key, action) {
    document.addEventListener("keydown", e => {
        if (e.key == key) {
            action();
        }
    });
}

function getPos() {
    let ptr = gameInstance.Module._malloc(12);
    gameInstance.Module.dynCall_viii(1927, 41991744, ptr);
    let ret = {
        x: readFloat32(ptr),
        y: readFloat32(ptr + 4),
        z: readFloat32(ptr + 8)
    };
    gameInstance.Module._free(ptr);
    return ret;
}

function getFsms() {
    return readList(gameInstance.Module.dynCall_iii(3073));
}

function setPos(x, y, z) {
    let ptr = gameInstance.Module._malloc(12);
    setFloat32(ptr, x);
    setFloat32(ptr + 0x4, y);
    setFloat32(ptr + 0x8, z);
    gameInstance.Module.dynCall_viii(1928, 41991744, ptr);
    gameInstance.Module._free(ptr);
}

function getFsmGameObject(ptr) {
    return gameInstance.Module.dynCall_iii(3114, ptr);
}

function readFsmTransitions(ptr) {
    return {
        toState: readPStr(ptr + 0xC),
        fsmEvent: readFsmEvent(read32(ptr + 0x8)),
        ptr
    };
}

function readFullArr(ptr) {
    let i = 0;
    let arr = [];
    while (readArr(ptr, i) != 0) {
        arr.push(readArr(ptr, i));
        i++;
        if (i > 500) {
            throw "Array is too large.";
        }
    }
    arr.ptr = ptr;
    return arr;
}

function readFsmState(ptr) {
    return {
        name: readPStr(ptr + 0x18),
        activeActionIndex: read32(ptr + 0x10),
        activeAction: (read32(ptr + 0xC) !== 0) ? readFsmStateAction(read32(ptr + 0xC)) : null,
        desc: readPStr(ptr + 0x1C),
        active: read8(ptr + 0x8),
        finished: read8(ptr + 0x9),
        actions: readFullArr(read32(ptr + 0x3C)).map(e => readFsmStateAction(e)),
        transitions: readFullArr(read32(ptr + 0x38)).map(e => readFsmTransitions(e)),
        ptr
    };
}

function readNamedVariable(ptr) {
    return {
        useVariable: read8(ptr + 0x8),
        name: readPStr(ptr + 0xC),
        tooltip: readPStr(ptr + 0x10),
        showInInspector: read8(ptr + 0x14),
        networkSync: read8(ptr + 0x15),
        ptr
    };
}

function readFsmStateAction(ptr) {
    return {
        name: readPStr(ptr + 0x8),
        type: readClassName(ptr),
        enabled: read8(ptr + 0xC),
        isOpen: read8(ptr + 0xD),
        active: read8(ptr + 0xE),
        finished: read8(ptr + 0xF),
        autoName: read8(ptr + 0x10),
        ptr
    };
}

function readFsmVariables(ptr) {
    return {
        floatVars: readFullArr(read32(ptr + 0x8)).map(e => readNamedVariable(e)),
        intVars: readFullArr(read32(ptr + 0xC)).map(e => readNamedVariable(e)),
        boolVars: readFullArr(read32(ptr + 0x10)).map(e => readNamedVariable(e)),
        stringVars: readFullArr(read32(ptr + 0x14)).map(e => readNamedVariable(e))
    };
}

function readFsmEvent(ptr) {
    return {
        name: readPStr(ptr + 0x8),
        isSystemEvent: read8(ptr + 0xC),
        isGlobal: read8(ptr + 0xD),
        ptr
    };
}

function searchFor(str) {
    let buffer = gameInstance.Module.HEAPU8;
    for (var i = 0; i < buffer.length; i += 2048) {
        const buf = [...buffer.subarray(i, i + 2048)].map(e => String.fromCharCode(e)).join("");
        if (buf.includes(str)) {
            console.log(i + buf.indexOf(str));
        }
    }
}

function read(loc, len) {
    return [...gameInstance.Module.HEAPU8.subarray(loc, loc + len)].map(e => String.fromCharCode(e)).join("");
}

function searchFor16(str) {
    str = str.split("").map(e => e + "\x00").join("");
    let buffer = gameInstance.Module.HEAPU8;
    for (var i = 0; i < 55000000; i += 2048) {
        const buf = [...buffer.subarray(i, i + 2048)].map(e => String.fromCharCode(e)).join("");
        if (buf.includes(str)) {
            console.log(i + buf.indexOf(str) - 12);
        }
    }
}

function searchFor16arr(str) {
    let retarr = [];
    str = str.split("").map(e => e + "\x00").join("");
    let buffer = gameInstance.Module.HEAPU8;
    let searchSize = 4096;
    for (var i = 0; i < buffer.length/searchSize; i += searchSize) {
        const buf = [...buffer.subarray(i, i + searchSize)].map(e => String.fromCharCode(e)).join("");
        if (buf.includes(str)) {
            retarr.push(i + buf.indexOf(str) - 12);
        }
    }
    return retarr;
}

function read(loc, len) {
    return [...gameInstance.Module.HEAPU8.subarray(loc, loc + len)].map(e => String.fromCharCode(e)).join("");
}

function read32(loc) {
    return gameInstance.Module.HEAP32[loc / 4];
}

function read16(loc) {
    return gameInstance.Module.HEAP16[loc / 2];
}

function set16(loc, val) {
    return gameInstance.Module.HEAP16[loc / 2] = val;
}

function read8(loc) {
    return gameInstance.Module.HEAPU8[loc];
}

function set8(loc, val) {
    gameInstance.Module.HEAPU8[loc] = val;
}

function set32(loc, val) {
    gameInstance.Module.HEAPU32[loc / 4] = val;
}

function setFloat32(loc, val) {
    gameInstance.Module.HEAPF32[loc / 4] = val;
}

function readFloat32(loc) {
    return gameInstance.Module.HEAPF32[loc / 4];
}

function readString(ptr) {
    let str = "";
    const len = read32(ptr + 0x8);
    if (len < 0 || len > 1e3) {
        console.log("Not a string!");
        return;
    }
    for (var i = 0; i < len * 2; i += 2) {
        str += String.fromCharCode(read16(ptr + 0xC + i));
    }
    return str;
}

function writeString(ptr, str) {
    set32(ptr + 0x8, str.length);
    for (let i = 0; i < str.length * 2; i += 2) {
        set16(ptr + 0xC + i, str.charCodeAt(i / 2))
    }
}

function readVec3(ptr) {
    return {
        x: readFloat32(ptr),
        y: readFloat32(ptr + 0x4),
        z: readFloat32(ptr + 0x8)
    };
}

function setVec3(ptr, vec) {
    if (vec.x == undefined || vec.y == undefined || vec.z == undefined) {
        throw "Vector3 must have an x, y, and z!";
    }
}

function readQuat(ptr) {
    return {
        x: readFloat32(ptr),
        y: readFloat32(ptr + 0x4),
        z: readFloat32(ptr + 0x8),
        w: readFloat32(ptr + 0xC)
    };
}

function setQuat(ptr, vec) {
    if (vec.x == undefined || vec.y == undefined || vec.z == undefined || vec.w == undefined) {
        throw "Quaternion must have an x, y, z, and w!";
    }
    setFloat32(ptr, vec.x);
    setFloat32(ptr + 0x4, vec.y);
    setFloat32(ptr + 0x8, vec.z);
    setFloat32(ptr + 0xC, vec.w);
}

function readArr(ptr, ind) {
    return read32(ptr + 0x10 + (ind * 4));
}

function setArr(ptr, ind, value) {
    return set32(ptr + 0x10 + (ind * 4), value);
}

function readPStr(ptr) {
    return readString(read32(ptr));
}

function searchForVar(name) {
    var strs = searchFor16arr(name);
    var possiblities = strs.map(e => {
        const ptrs = searchForInt32(e);
        if (ptrs.length > 1) {
            throw "more than 1 pointer found!";
        }
        return ptrs[0] - 0xC;
    });
    return possiblities.filter(e => {
        if (read8(e + 0x8) > 1) {
            return;
        }
        if (read8(e + 0x14) > 1) {
            return;
        }
        if (read8(e + 0x15) > 1) {
            return;
        }
        return !0;
    }).map(e => e + 0x18);
}

function speedUp(){
    const gameManager = getGameManager();
    if(!gameManager){alert("GameManager is not initalized yet! Wait before trying this keybind!");return;}
    gameInstance.Module.dynCall_vii(16123,gameManager);
}
function searchForFloat(val) {
    const arr = gameInstance.Module.HEAPF32;
    let addrs = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            addrs.push(i * 4);
        }
    }
    return addrs;
}

function searchForInt32(val) {
    const arr = gameInstance.Module.HEAPU32;
    let addrs = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            addrs.push(i * 4);
        }
    }
    return addrs;
}
document.addEventListener("keydown",e=>{
    switch(e.key){
        case "y":
        speedUp();
        break;
    }
});
