document.getElementById("Grade").addEventListener("click", Calculation);
let Client1;
let Structure1;
let Structure2;
let Client2;
let A;
let average;
document.getElementById("Area").addEventListener("click", Trapezoid);
let Base1;
let Base2;
let Height;
let Area;
function Trapezoid() {
  Base1 = +document.getElementById("Base 1").value;
  Base2 = +document.getElementById("Base 2").value;
  Height = +document.getElementById("Height").value;
  Area = ((Base1 + Base2) * Height) / 2;
  document.getElementById("Result").innerHTML = Area;
}
function Calculation() {
  Client1 = +document.getElementById("Client-side 1").value;
  Structure1 = +document.getElementById("Structure 1").value;
  Structure2 = +document.getElementById("Structure 2").value;
  Client2 = +document.getElementById("Client-side 2").value;
  A = +document.getElementById("Project").value;
  average = (Client1 + Structure1 + Structure2 + Client2 + A) / 5;
  document.getElementById("Total").innerHTML = average;
}
