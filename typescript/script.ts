// Basic ex 1
let numbers : Array<number> = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers.length; i++) {
    let st = numbers[i];
    for (let j = 1; j <= 10; j++) {
      console.log(`${st} X ${j} = ${st * j}`);
    (document.getElementById("result") as HTMLElement).innerHTML += `<p>${st} X ${j} = ${st * j}</p>`
    }
    (document.getElementById("result") as HTMLElement).innerHTML += `<hr>`
  }
  // Basic ex 2

let names: { fName: string; lName: string}[] = [
    { fName: "Arnaldo", lName: "Bismarques"},
];
console.log(names);
