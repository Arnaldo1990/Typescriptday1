// let i : number = 1;
// let msg : string = '';
// while (i <= 10) {
//   msg = i + ' x 1 = ' + (i * 1) + '<br>';
//   i++;
//   (document.getElementById("result") as HTMLElement).innerHTML += msg;
// }


// let h : number= 1;
// let mg : string = '';
// while (h <= 10) {
//   mg = h + " x 2 = " + (h * 2) + "<br/>"
//   h++; 
//   (document.getElementById("result2") as HTMLElement).innerHTML += mg;
// }


// let g : number = 1;
// let mng : string = '';
// while (g <= 10) {
//     mng = g + "x 10 = " + (g * 10)+ "<br/>"
//     g++;  
//     (document.getElementById("result3") as HTMLElement).innerHTML += mng;

// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.forEach((value, index) => {
//   array.forEach((value2) => {
//     console.log(value2 * (index + 1));
//   });
// });
const result = document.getElementById("result4") as HTMLElement;

let person: { fname: string; lname: string }[] = [
  {
    fname: "Aleksandar",
    lname: "Stefanovski",
  },
];
// console.log(person);
person.forEach((ma) => {
  console.log(ma.fname.repeat(10));
  result.innerHTML = (ma.fname.repeat(10));
});

// let people: Array<{ fName: string; lName: string }> = [
//   { fName: "Aleksandar", lName: "Stefanovski" },
// ];


// let array1 = ["Darija", "EvaMarija", "Filip", "Alex", "Karl"];
// for (let i = 0; i < array1.length; i++) {
//   const index = array1[i];
//   console.log(index);
//   console.log(array1[i], array1);
// }
// console.log(array1);
// document.getElementById("result4") as HTMLElement;



// // let myArray = ["Darija", "EvaMarija", "Filip", "Alex", "Karl"];
// // for (let i = 0; i < myArray.length; i++) {
// //   console.log(`Array element ${myArray[i]} with index ${i}`);
// // }

// // let myArray = ["Yoda","Mace Windu", "Obi-Wan"];
// // myArray.forEach(function(value, index) {
//   console.log(`Array element ${value} with index ${index}`);
// });