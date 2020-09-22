let sumaPares = 0;
let numerosNegativos = 0;
let numerosPositivos = 0;
let multiplo15 = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt("Ingrese un número"));
  if (numero < 0) {
    numerosNegativos++;
  } else if (numero > 0) {
    numerosPositivos++;
  }
  if (numero % 15 == 0) {
    multiplo15++;
  }
  if (numero % 2 == 0) {
    sumaPares = sumaPares + numero;
  }
}

document.write(
  `Ingresaste ${numerosNegativos} números negativos. <br> Ingresaste ${numerosPositivos} números positivos. <br> Ingresaste ${multiplo15} múltiplos de 15. <br> La suma de los números pares es ${sumaPares}.`
);
