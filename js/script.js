function calcularPromedio() {
  let notas = [];
  let suma = 0;

  for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(document.getElementById("nota" + i).value);

    if (isNaN(nota)) {
      alert("Ingresa un valor numérico válido en la nota " + i + ".");
      return;
    }

    if (nota < 0 || nota > 100) {
      alert("La nota " + i + " debe estar entre 0 y 100.");
      return;
    }

    notas.push(nota);
    suma += nota;
  }

  let promedio = suma / 5;

  document.getElementById("resultado").innerHTML =
    "El promedio es: " + promedio.toFixed(2);

}
