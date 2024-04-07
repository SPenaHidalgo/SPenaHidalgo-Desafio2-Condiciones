//Ejercicio 2

//Constantes
function mostrarValor() {
 // Obtener los valores de los inputs
 const valor1 = parseInt(document.getElementById("sticker1").value);
 const valor2 = parseInt(document.getElementById("sticker2").value);
 const valor3 = parseInt(document.getElementById("sticker3").value);

 // Calcular la suma de los valores
 const suma = valor1 + valor2 + valor3;

 // Verificar si la suma es mayor que 10
 if (suma <= 10) {
  // Mostrar mensaje de que son muchos stickers
  document.getElementById("mostrarValor").textContent = "Llevas: " + suma;
 } else {
  // Mostrar el valor en el div
  document.getElementById("mostrarValor").textContent = "Son muchos stickers";
 }
}

// Llamar a la función mostrarValor al cargar la página para que muestre el valor inicial
mostrarValor();

// Agregar un event listener para detectar cuando cambia el valor de cualquier input
document.getElementById("sticker1").addEventListener("change", mostrarValor);
document.getElementById("sticker2").addEventListener("change", mostrarValor);
document.getElementById("sticker3").addEventListener("change", mostrarValor);
