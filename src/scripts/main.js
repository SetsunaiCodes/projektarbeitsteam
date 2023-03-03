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
document.getElementById("eventshoritem").addEventListener("click", timerhor);
document.getElementById("eventsveritem").addEventListener("click", timerver);
document
  .getElementById("hintergrundchangeclose")
  .addEventListener("click", hintergrundchangeclose);
document.getElementById("default3").addEventListener("click", bg3);
document.getElementById("default1").addEventListener("click", bg1);
document.getElementById("default2").addEventListener("click", bg2);
document.getElementById("residentevil").addEventListener("click", re);
document.getElementById("hades").addEventListener("click", hades);
document.getElementById("nomanssky").addEventListener("click", nomanssky);
document.getElementById("gowwallpaper1").addEventListener("click", gow1);
document.getElementById("gowwallpaper2").addEventListener("click", gow2);
document.getElementById("melinda").addEventListener("click", melinda);
document
  .getElementById("hintergrundchange")
  .addEventListener("click", hintergrundchange);
document
  .getElementById("clearbackground")
  .addEventListener("click", clearbackground);

function collectionhor() {
  if (this.classList.contains("headericon")) {
    var collectionhor = document.getElementById("collectionhor");
    collectionhor.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var collectionhor = document.getElementById("collectionhor");
    collectionhor.classList.add("hider");

    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function collectionver() {
  if (this.classList.contains("headericon")) {
    var collectionverelement = document.getElementById("collectionver");
    collectionverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var collectionverelement = document.getElementById("collectionver");
    collectionverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function friendlisthor() {
  if (this.classList.contains("headericon")) {
    var friendlisthorelement = document.getElementById("friendlisthor");
    friendlisthorelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var friendlisthorelement = document.getElementById("friendlisthor");
    friendlisthorelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function friendlistver() {
  if (this.classList.contains("headericon")) {
    var friendlistverelement = document.getElementById("friendlistver");
    friendlistverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var friendlistverelement = document.getElementById("friendlistver");
    friendlistverelement.classList.add("hider");

    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function angebotehor() {
  if (this.classList.contains("headericon")) {
    var angebotehorelement = document.getElementById("angebotehor");
    angebotehorelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var angebotehorelement = document.getElementById("angebotehor");
    angebotehorelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function angebotever() {
  if (this.classList.contains("headericon")) {
    var angeboteverelement = document.getElementById("angebotever");
    angeboteverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var angeboteverelement = document.getElementById("angebotever");
    angeboteverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function timerhor() {
  if (this.classList.contains("headericon")) {
    var timerhorelement = document.getElementById("eventshor");
    timerhorelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var timerhorelement = document.getElementById("eventshor");
    timerhorelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function timerver() {
  if (this.classList.contains("headericon")) {
    var timerverelement = document.getElementById("eventsver");
    timerverelement.classList.remove("hider");

    this.classList.remove("headericon");
    this.classList.add("headericonused");
    grid.refreshItems().layout();
  } else {
    var timerverelement = document.getElementById("eventsver");
    timerverelement.classList.add("hider");
    this.classList.remove("headericonused");
    this.classList.add("headericon");
    grid.refreshItems().layout();
  }
}
function hintergrundchangeclose() {
  var bgchangeelement = document.getElementById("bgchange");
  bgchangeelement.classList.add("hider");
}

function bg1() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("default1");
}
function bg3() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("default3");
}
function bg2() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("default2");
}
function re() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("residentevil");
}
function hades() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("hades");
}
function nomanssky() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("nomanssky");
}
function melinda() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("melinda");
}
function gow1() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("gowwallpaper1");
}
function gow2() {
  const sortlayerbg = document.getElementById("sortlayer");
  sortlayerbg.classList.add("gowwallpaper2");
}

function hintergrundchange() {
  var bgchangeelement = document.getElementById("bgchange");
  bgchangeelement.classList.remove("hider");
}
function clearbackground() {
  const backgroundcheck = document.getElementById("sortlayer");
  if (backgroundcheck.classList.contains("hades")) {
    backgroundcheck.classList.remove("hades");
  }
  if (backgroundcheck.classList.contains("residentevil")) {
    backgroundcheck.classList.remove("residentevil");
  }
  if (backgroundcheck.classList.contains("nomanssky")) {
    backgroundcheck.classList.remove("nomanssky");
  }
  if (backgroundcheck.classList.contains("melinda")) {
    backgroundcheck.classList.remove("melinda");
  }
  if (backgroundcheck.classList.contains("gowwallpaper2")) {
    backgroundcheck.classList.remove("gowwallpaper2");
  }
  if (backgroundcheck.classList.contains("gowwallpaper1")) {
    backgroundcheck.classList.remove("gowwallpaper1");
  }
  if (backgroundcheck.classList.contains("default2")) {
    backgroundcheck.classList.remove("default2");
  }
  if (backgroundcheck.classList.contains("default3")) {
    backgroundcheck.classList.remove("default3");
  }
}
