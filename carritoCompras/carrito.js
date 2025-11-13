/*Implementar un sistema simple de carrito de compras que actualice cantidades y precios.
1. Crea 3 productos con nombre y precio (usa elementos <span> para mostrar los precios).
2. Para cada producto, agrega un botón "Agregar al carrito" con evento onclick que:
•Actualice un contador de items totales (<span id="total-items">0</span>)
•Sume el precio al total acumulado (<span id="total-precio">0</span>)
3. Funcionalidades adicionales:
•Muestra un alert() con el mensaje "¡Envío gratis aplicado!" cuando el total supere los $50.
•Implementa un console.log() que liste los productos agregados al carrito.
4. Agrega un botón "Vaciar carrito" que:
•Restablezca todos los contadores a 0
•Muestre un alert() con el mensaje "Carrito vaciado" */

// Variables globales para guardar los totales
let items = 0;
let totalPrecio = 0;

// Array para guardar los productos agregados
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  items++; // Sumar un ítem
  totalPrecio += precio; // Sumar su precio al total
  carrito.push(nombre); // Agregar el producto al listado

  // Actualizar los valores en pantalla
  document.getElementById('total-items').textContent = items;
  document.getElementById('total-precio').textContent = totalPrecio.toFixed(2);

  // Si el total supera $50, mostrar alerta
  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  // Mostrar en consola los productos
  console.log("Productos en el carrito:", carrito);
}

// Función para vaciar el carrito
function vaciarCarrito() {
  items = 0;
  totalPrecio = 0;
  carrito = [];

  // Actualizar la pantalla
  document.getElementById('total-items').textContent = 0;
  document.getElementById('total-precio').textContent = 0;

  alert("Carrito vaciado");
}





