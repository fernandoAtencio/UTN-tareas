const handlerNombre = (nombre) => {
  const element = document.getElementById(nombre);
  element.value == ""
    ? (element.style.border = `1px solid red`)
    : (element.style.border = `1px solid green`);
};

const send = () => {
  const obj = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem(obj.email, JSON.stringify(obj));
};
const getLocalStorage = () => {
  const keysObject = Object.keys(localStorage);
  // KEYS
  keysObject.forEach((keys) => console.log(localStorage.getItem(keys)));
};

const start = () => {
  document.getElementById("nombre").addEventListener("blur", () => {
    handlerNombre("nombre");
  });
  document.getElementById("apellido").addEventListener("blur", () => {
    handlerNombre("apellido");
  });
  document.getElementById("email").addEventListener("blur", () => {
    handlerNombre("email");
  });
  document.getElementById("enviar").addEventListener("click", send);
  document
    .getElementById("getLocalStorage")
    .addEventListener("click", getLocalStorage);
};
window.onload = start;
