"use strict";
// Basic ex 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    let st = numbers[i];
    for (let j = 1; j <= 10; j++) {
        console.log(`${st} X ${j} = ${st * j}`);
        document.getElementById("result").innerHTML += `<p>${st} X ${j} = ${st * j}</p>`;
    }
    document.getElementById("result").innerHTML += `<hr>`;
}
// Basic ex 2
let result = document.getElementById("names");
let names = [
    {
        fName: "Arnaldo <br><hr>",
        lName: "Bismarques <br>",
    },
];
names.forEach((ab) => {
    console.log(ab.fName.repeat(10));
    result.innerHTML = (ab.fName.repeat(10));
});
names.forEach((ab) => {
    console.log(ab.lName.repeat(10));
});
function message() {
    document.getElementById("result").innerHTML = "Hello, I am here";
}
setTimeout(message, 3000);
// Basic ex 3
const namesagain = document.getElementById("people");
let array = ["Samuel<br>", "Julia<br>", "Arnaldo<br>", "Khoa<br>", "Tuan<br>"];
for (let i = 0; i < array.length; i++) {
    const index = array[i];
    console.log(index);
    console.log(array[i], array);
    result.innerHTML += index;
}
