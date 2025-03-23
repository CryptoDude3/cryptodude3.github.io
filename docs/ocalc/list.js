const dynlist = document.getElementById("dynlist");
let edit;

function renderList() {
  dynlist.innerHTML = "";

  for (let i = 0; i < dist.length; i++) {
    const newelement = document.createElement("li");
    newelement.setAttribute("id", "list" + i);

    if (edit) {
      newelement.innerHTML = `<input type="number" class="edit" value="${angles[i]}"> degrees, <input type="number" class="edit" value="${dist[i]}"> feet <button onclick="finishEdit(${i});">Done</button>`;
    } else {
      newelement.innerHTML = `${angles[i]} degrees, ${dist[i]} feet <button onclick="editList();">Edit</button><button onclick="removeList(${i});">Remove</button>`;
    }

    dynlist.appendChild(newelement);
  }
}

renderList();

function editList() {
  edit = true;
  renderList();
}

function finishEdit(i) {
  edit = false;
  const list = document.getElementById("list" + i);
  angles[i] = list.children[0].value;
  dist[i] = list.children[1].value;

  renderList();
  reCalc();
}

function add() {
  angles.push(90);
  dist.push(40);
  editList();
}

function removeList(i) {
  angles.splice(i, 1);
  dist.splice(i, 1);
  renderList();
  reCalc();
}
