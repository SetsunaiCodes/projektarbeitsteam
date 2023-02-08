const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("div-container");
const BtnAddver = document.querySelector(".btn-addver")
const DivContainerver = document.getElementById("div-containerver");
const Btn = document.getElementById('btnhor');
const Btnver = document.getElementById('btnver');
var counterdivhor = 0;
var counterdivver = 0;

BtnAdd.addEventListener("click", AddNew);
BtnAddver.addEventListener("click",AddNewver);

function AddNew() {
  const newDiv = document.createElement("div");
  console.log("add");
  newDiv.classList.add("box");
  DivContainer.appendChild(newDiv);
  counterdivhor++;
  const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
}
}
function AddNewver(){
    const newDivver = document.createElement("div");
    console.log("add");
    newDivver.classList.add("box");
    newDivver.classList.add("sidebar");
    DivContainerver.appendChild(newDivver);
    counterdivver++;
    const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
}
}
function removebtnhor() {
    if(counterdivhor == 2){
        var elem = document.getElementById('btnhor');
        elem.parentNode.removeChild(elem);
        return false;
    }
}
function removebtnver(){
    if(counterdivver == 0){
        var elemver = document.getElementById('btnver');
        elemver.parentNode.removeChild(elemver);
        return false;
    }
}

const outerDiv = document.getElementById("box");
const group = document.getElementsByClassName("group");
if(outerDiv.contains(group)){

}