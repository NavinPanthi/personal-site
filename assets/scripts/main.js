function darkmode() {
  if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  console.log(document.body.style.backgroundColor);
}

function swapdarkmode() {
  if (document.getElementById("da").classList.contains("uil-moon")) {
    document.getElementById("da").classList.add("uil-sun");
    document.getElementById("da").classList.remove("uil-moon");
  } else {
    document.getElementById("da").classList.remove("uil-sun");
    document.getElementById("da").classList.add("uil-moon");
  }
}

let frontend = document.querySelector(".frontend-section table");
let fshow = 0;
let ui_ux = document.querySelector(".ui_ux-section table");
let ushow = 0;
let backend = document.querySelector(".backend-section table");
let bshow = 0;

function showHideFrontend(){
  frontend.classList.toggle("hide");
  fshow=1;
}
function showHideui_ux() {
  ui_ux.classList.toggle("hide");
  ushow = 1;
}
function showHideBackend() {
  backend.classList.toggle("hide");
  bshow = 1;
}

function swapbutton() {
  if (document.getElementById("button").classList.contains("uil-angle-down")) {
    document.getElementById("button").classList.add("uil-angle-up");
    document.getElementById("button").classList.remove("uil-angle-down");
  } else {
    document.getElementById("button").classList.remove("uil-angle-up");
    document.getElementById("button").classList.add("uil-angle-down");
  }
}

function swapbutton1() {
  if (document.getElementById("button2").classList.contains("uil-angle-down")) {
    document.getElementById("button2").classList.add("uil-angle-up");
    document.getElementById("button2").classList.remove("uil-angle-down");
  } else {
    document.getElementById("button2").classList.remove("uil-angle-up");
    document.getElementById("button2").classList.add("uil-angle-down");
  }
}

function swapbutton2() {
  if (document.getElementById("button3").classList.contains("uil-angle-down")) {
    document.getElementById("button3").classList.add("uil-angle-up");
    document.getElementById("button3").classList.remove("uil-angle-down");
  } else {
    document.getElementById("button3").classList.remove("uil-angle-up");
    document.getElementById("button3").classList.add("uil-angle-down");
  }
}


