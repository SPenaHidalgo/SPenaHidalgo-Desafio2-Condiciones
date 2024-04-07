//Constantes
const boton = document.getElementById("btn");
const resultado = document.getElementById("result");

boton.addEventListener("click", () => {
 const number1 = document.getElementById("number1").value;
 const number2 = document.getElementById("number2").value;
 const number3 = document.getElementById("number3").value;

 if (number1 == 9 && number2 == 1 && number3 == 1) {
  resultado.textContent = "password 1 correcto";
 } else if (number1 == 7 && number2 == 1 && number3 == 4) {
  resultado.textContent = "password 2 correcto";
 } else {
  resultado.textContent = "password incorrecto";
 }
});