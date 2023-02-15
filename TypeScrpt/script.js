"use strict";
let i = 1;
let msg = '';
while (i <= 10) {
    msg = i + ' x 1 = ' + (i * 1) + '<br>';
    i++;
    document.getElementById("result").innerHTML += msg;
}
let h = 1;
let mg = '';
while (h <= 10) {
    mg = h + " x 2 = " + (h * 2) + "<br/>";
    h++;
    document.getElementById("result2").innerHTML += mg;
}
let g = 1;
let mng = '';
while (g <= 10) {
    mng = g + "x 10 = " + (g * 10) + "<br/>";
    g++;
    document.getElementById("result3").innerHTML += mng;
}
