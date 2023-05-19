// Obtener todas las cajas con la clase "miCaja"
const cajas = document.querySelectorAll(".miCaja, .miCaja2");
console.log(cajas)

// Almacenar el color original en una variable
const colorOriginal = getComputedStyle(cajas[0]).backgroundColor;
console.log(colorOriginal)

// Función para modificar el color de las cajas
function cambiarColor() {
  cajas.forEach(caja => {
    caja.classList.add("cajaModificada");
  });
}

 // cambiarColor()

// Función para restaurar el color original de las cajas
function restaurarColor() {
  cajas.forEach(caja => {
    caja.classList.remove("cajaModificada");
    caja.style.backgroundColor = colorOriginal;
  });
}

//restaurarColor()