import "ionicons";
import Muuri from "muuri";

const grid = new Muuri(".grid", {
  dragEnabled: true,
});
document
  .getElementById("collectionhoritem")
  .addEventListener("click", collectionhor);
document
  .getElementById("collectionveritem")
  .addEventListener("click", collectionver);
document
  .getElementById("friendlisthoritem")
  .addEventListener("click", friendlisthor);
document
  .getElementById("friendlistveritem")
  .addEventListener("click", friendlistver);
document
  .getElementById("angebotehoritem")
  .addEventListener("click", angebotehor);
document
  .getElementById("angeboteveritem")
  .addEventListener("click", angebotever);
document.getElementById("timerhoritem").addEventListener("click", timerhor);
document.getElementById("timerveritem").addEventListener("click", timerver);
function collectionhor() {
  if (this.classList.contains("headericon")) {
    var collectionhorelement = document.querySelectorAll(
      ".grid .collectionhor"
    );
    collectionhorelement.forEach(function (collectionhor) {
      collectionhor.classList.remove("hider");
    });

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var collectionhorelement = document.querySelectorAll(
      ".grid #collectionhor"
    );
    items.forEach(function (collectionhor) {
      collectionhor.classList.add("hider");
    });
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function collectionver() {
  if (this.classList.contains("headericon")) {
    var collectionverelement = document.getElementById("collectionver");
    collectionverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var collectionverelement = document.getElementById("collectionver");
    collectionverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function friendlisthor() {
  if (this.classList.contains("headericon")) {
    var friendlisthorelement = document.getElementById("friendlisthor");
    friendlisthorelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var friendlisthorelement = document.getElementById("friendlisthor");
    friendlisthorelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function friendlistver() {
  if (this.classList.contains("headericon")) {
    var friendlistverelement = document.getElementById("friendlistver");
    friendlistverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var friendlistverelement = document.getElementById("friendlistver");
    friendlistverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function angebotehor() {
  if (this.classList.contains("headericon")) {
    var angebotehorelement = document.getElementById("angebotehor");
    angebotehorelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var angebotehorelement = document.getElementById("angebotehor");
    angebotehorelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function angebotever() {
  if (this.classList.contains("headericon")) {
    var angeboteverelement = document.getElementById("angebotever");
    angeboteverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var angeboteverelement = document.getElementById("angebotever");
    angeboteverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function timerhor() {
  if (this.classList.contains("headericon")) {
    var timerhorelement = document.getElementById("timerhor");
    timerhorelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var timerhorelement = document.getElementById("timerhor");
    timerhorelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
function timerver() {
  if (this.classList.contains("headericon")) {
    var timerverelement = document.getElementById("timerver");
    timerverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
  } else {
    var timerverelement = document.getElementById("timerver");
    timerverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
  }
}
