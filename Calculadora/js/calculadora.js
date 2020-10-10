const handlerInput = (item) => {
  console.log(item);
  const element = document.getElementById(item);
  element.value == ""
    ? (element.style.border = `1px solid red`)
    : (element.style.border = `1px solid green`);
};

const dividir1 = () => {
  numero1 = parseInt(document.getElementById("numero1").value);
  numero2 = parseInt(document.getElementById("numero2").value);
  const division = numero1 / numero2;
  alert("La división los números es " + division);
  console.log(division);
  const operacion = "La división de los números es: ";
  resultado(operacion, division);
};

const sumar = () => {
  numero1 = parseInt(document.getElementById("numero1").value);
  numero2 = parseInt(document.getElementById("numero2").value);
  const suma = numero1 + numero2;
  alert("La suma de los números es " + suma);
  console.log(suma);
  const operacion = "La suma de los números es: ";
  resultado(operacion, suma);
};

const restar = () => {
  const obj = {
    numero1: parseInt(document.getElementById("numero1").value),
    numero2: parseInt(document.getElementById("numero2").value),
  };
  alert("La resta de los números es " + (obj.numero1 - obj.numero2));
  console.log(obj.numero1 - obj.numero2);
  const operacion = "La resta de los números es ";
  resultado(operacion, obj.numero1 - obj.numero2);
};

const multiplicar = () => {
  const obj = {
    numero1: parseInt(document.getElementById("numero1").value),
    numero2: parseInt(document.getElementById("numero2").value),
  };
  alert("La multiplicación de los números es " + obj.numero1 * obj.numero2);
  const operacion = "La multiplicación de los números es ";
  resultado(operacion, obj.numero1 * obj.numero2);
};

const resultado = (operacion, resultado) => {
  document.getElementById("resultado").innerHTML = operacion + resultado;
};

const start = () => {
  console.log("start");
  document.getElementById("numero1").addEventListener("input", () => {
    handlerInput("numero1");
  });
  document.getElementById("numero2").addEventListener("input", () => {
    handlerInput("numero2");
  });
  document.getElementById("sumar").addEventListener("click", sumar);
  document.getElementById("restar").addEventListener("click", restar);
  document.getElementById("multiplicar").addEventListener("click", multiplicar);
};
window.onload = start;
