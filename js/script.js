function calcularNotaFinal() {
  // Obtener las notas ingresadas por el usuario
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);

  // Calcular la nota final
  const notaFinal = (nota1 + nota2 + nota3) / 3;

  // Actualizar el elemento HTML con el resultado
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `La nota final es: ${notaFinal.toFixed(2)}`;
}
