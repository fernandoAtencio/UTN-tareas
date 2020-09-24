/*const numero1 = Number(prompt("Ingresa un número"));
const numero2 = Number(prompt("Ingresa otro número"));
const numero3 = Number(prompt("Ingresa otro numero"));

if (numero1 < 10 || numero2 < 10 || numero3 < 10) {
  document.write("Alguno de los números es menor a 10");
} else {
  document.write("No ingresaste números menores a 10");
}
*/
const numeros = [];

for (let i = 1; i <= 3; i++) {
  let numero = Number(prompt(`Ingresá el número ${i}`));
  numeros.push(numero);
}
let maximo = Math.max(...numeros);
maximo <= 10
  ? document.write("Alguno de los números es menor a 10")
  : document.write("No ingresaste números menores a 10");
