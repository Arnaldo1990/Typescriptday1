let i : number = 1;
let msg : string = '';
while (i <= 10) {
  msg = i + ' x 1 = ' + (i * 1) + '<br>';
  i++;
  (document.getElementById("result") as HTMLElement).innerHTML += msg;
}


let h : number= 1;
let mg : string = '';
while (h <= 10) {
  mg = h + " x 2 = " + (h * 2) + "<br/>"
  h++; 
  (document.getElementById("result2") as HTMLElement).innerHTML += mg;
}


let g : number = 1;
let mng : string = '';
while (g <= 10) {
    mng = g + "x 10 = " + (g * 10)+ "<br/>"
    g++;  
    (document.getElementById("result3") as HTMLElement).innerHTML += mng;

}