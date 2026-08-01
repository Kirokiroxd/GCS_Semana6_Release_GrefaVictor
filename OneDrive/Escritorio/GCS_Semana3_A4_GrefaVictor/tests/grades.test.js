const { calcularPromedio } = require('../src/app_logic');
console.log("Corriendo pruebas...");
if (calcularPromedio([10, 8, 9]) === 9) {
  console.log("Prueba promedio correcto: PASADA");
}
