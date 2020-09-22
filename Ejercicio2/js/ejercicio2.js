let suma = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt("Ingrese un número"));
  if (i > 5) {
    suma = suma + numero;
  }
}

document.write(`la suma de los últimos números ingresados es ${suma}`);
