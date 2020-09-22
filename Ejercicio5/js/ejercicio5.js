let numerosPares = 0;
let numerosImpares = 0;
let ceros = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt("Ingrese un número"));
  if (numero % 2 == 0 && numero != 0) {
    numerosPares++;
  } else if (numero === 0) {
    ceros++;
  } else {
    numerosImpares++;
  }
}

document.write(
  `Ingresaste ${numerosPares} números pares. <br> Ingresaste ${numerosImpares} números impares. <br> Ingresaste ${ceros} ceros.`
);
