import "ionicons";
import Muuri from "muuri";

const grid = new Muuri(".grid", {
  dragEnabled: true,
});

/* draggable element */
const item = document.querySelector(".itemdrag");

item.addEventListener("dragstart", dragStart);

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hider");
  }, 0);
}

/* drop targets */
const boxes = document.querySelectorAll(".dragbox");

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");

  // get the draggable element
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove("hider");

  var grids = document.getElementsByClassName('.item-content');
  var parentDiv = document.getElementById('dragbox');
  var collectionhoritem = parentDiv.querySelector('.collectionhoritem');
  if(collectionhoritem){
    var collectionhor = grids.querySelector('.collectionhor');
    collectionhor.classList.remove('.hider');
  }
}
