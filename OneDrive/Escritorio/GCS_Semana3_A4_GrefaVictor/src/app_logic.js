function calcularPromedio(notas) {
  if (!notas || notas.length === 0) return 0;
  const suma = notas.reduce((acc, curr) => acc + curr, 0);
  return suma / notas.length;
}
module.exports = { calcularPromedio };
