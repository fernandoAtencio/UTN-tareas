/*

let contadorClicks = 0;

const contador = () => {
  contadorClicks++;
  alert(contadorClicks);
};


const handlerFocus = (event) => {
    event.blur();
};
*/
const pintar = () => {
  console.log("Pintameeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  const element = document.getElementById("recuadro"); // retorna el objeto
  element.style.backgroundColor = "tomato";
  element.style.borderRadius = "5%";
  document.getElementById("message").innerText = "Elemento pintado";
};

const despintar = () => {
  const element = document.getElementById("recuadro");
  element.style.backgroundColor = "White";
  element.style.borderRadius = "0%";
  document.getElementById("message").innerText = "Elemento en blanco";
};
const pintar2 = () => {
  document.getElementById("recuadro2").style.backgroundColor = "rebeccapurple";
};
const despintar2 = () => {
  document.getElementById("recuadro2").style.backgroundColor = "ghostwhite";
};

const handlerInput = (event) => {
  console.log("aaaaaaa");
};
const start = () => {
  // ACCESO AL ELEMENTO.ESCUCHAR("EVENTO", FUNCIÓN)
  document.getElementById("usuario").addEventListener("input", handlerInput); // los dos parametros son que queres vigilar y que funcion queres disparar
  // TAMBIÉN SE PUEDE PONER document.getElementById("usuario").input = handlerInput();
  //const elemento = document.getElementById("usuario").focus(); // enfoca al input cuando carga la página
  document.getElementById("btnPintar").addEventListener("click", pintar);
  document.getElementById("btnDespintar").addEventListener("click", despintar);
  document.getElementById("recuadro2").addEventListener("mouseover", pintar2);
  document.getElementById("recuadro2").addEventListener("mouseout", despintar2);
};

window.onload = start;
