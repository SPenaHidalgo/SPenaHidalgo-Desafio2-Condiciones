//Ejercicio 1
//Constantes
const image = document.getElementById("image");

image.addEventListener("click", () => {
 if (image.style.border === "" || image.style.border === "none") {
  image.style.border = "2px solid red";
 } else {
  image.style.border = "none";
 }
});
