let contador, suma, nota, promedio;
contador = 1;
suma = 0;
for (contador === 1; contador <= 10; contador++) {
  nota = Number(prompt("Ingrese una nota: "));
  suma += nota;
}
promedio = suma / 10;
console.log("El promedio de las notas es: " + promedio);