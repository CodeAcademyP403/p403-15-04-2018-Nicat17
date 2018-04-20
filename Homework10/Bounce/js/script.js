var back = document.querySelector(".main");
var circle = document.querySelector(".circle");

var colorValue = document.querySelector("#color");
var colorBack = document.querySelector("#back");
var circlePhoto = document.querySelector("#circlePhoto");
var backPhoto = document.querySelector("#backPhoto");
var radius = document.querySelector("#radius");
var range = document.querySelector("#range");

var Top = 10;
var y = true;
var x = false;
var time;
var mult;
var temp;
// TIME And  SPEED

setInterval(timer, 30);

function myStopFunction() {
    clearInterval(temp);
}

range.onchange = function () {
    myStopFunction();
    temp=setInterval(timer,range.value);
}



function timer() {
    if (Top < 65 && y == true) {
        Top += 1;
        if (Top == 64) {
            x = true;
            y = false;
        }
    }
    if (x == true) {
        Top -= 1;
        if (Top == 10) {
            y = true;
            x = false;
        }
    }
    circle.style.top = Top + "%";
}

// COLORS SELECT

colorValue.onchange = function () {
    circle.style.background = "url()";
    circle.style.backgroundColor = `${colorValue.value}`;
}

colorBack.onchange = function () {
    back.style.background = "url()";
    back.style.backgroundColor = `${colorBack.value}`;
}

// Photo

circlePhoto.onchange = function () {
    circle.style.backgroundColor = "";
    circlePhoto = circlePhoto.value;
    circle.style.background = "url('" + circlePhoto + "')";
}

backPhoto.onchange = function () {
    back.style.backgroundColor = "";
    backPhoto = backPhoto.value;
    back.style.background = "url('" + backPhoto + "')";
}



// Radius

radius.onchange = function () {
    var rad = radius.value;
    console.log(rad);
    if (rad > 0 && rad <= 140) {
        circle.style.width = rad + "px";
        circle.style.height = rad + "px";
    }
}