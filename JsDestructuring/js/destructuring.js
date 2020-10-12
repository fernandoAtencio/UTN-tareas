/*
const alumno = {
  nombre: "Fernando",
  apellido: "Atencio",
  edad: 44,
  dni: 25267123,
  bebida: "fernet",
};

const data = (p1 = "default") => {
  // parámetro por default para setear en caso de que no pongan nada
  const nombre = "Cuqui";
  const apellido = "Silvani"; // me permite definir como variables locales para usar la propiedad por su nombre o por su alias dentro de la función
  
  const { nombre: nombreAlumno, apellido : apellidoAlumno, bebidas = "vino" } = alumno; // extrae las propiedades del objeto alumno, nombre alumno es un alias. bebidas no existe como propiedad pero al asignarle un valor se va a mostrar
  console.log(
    `${nombreAlumno} ${apellido} la bebida favorita es el ${bebidas}`
  ); // muestra esas propiedades concatenadas. Se llama por el alias
};

data();*/
// Destructuring es extraer datos, en el caso de vectores se extraen las posiciones
// en el caso de objetos se extraen propiedades
// Destructuring en vectores
/*
const comidas = () => {
  const comidasMenu = [
    "Picada",
    "Asado",
    "Helado",
    "Rabas",
    "Hamburguesa",
    "Chocotorta",
  ]; //      operador spread con ...rest. Lee las posiciones 0, 1 y 2 y las corta, almacenando el resto
  const [entrada, platoPrincipal, postre, ...rest] = comidasMenu; // con el destructuring en el vector se extraen posiciones. entrada en la pos 0, platoprinc en la pos 1 y postre en la pos2
  console.log(rest);
  console.log(
    `Menú. Entrada: ${entrada}, Plato Principal: ${platoPrincipal} y postre: ${postre}`
  );
};
comidas();
*/
// otro ejemplo de operador spread
/*
const merge = () => {
  const obj1 = {
    nombre: "Fernando",
  };

  const obj2 = {
    apellido: "Atencio",
  };
  const obj3 = {
    // se usa el spread para crear un nuevo objeto a partir de otros dos
    edad: 44,
  };
  const result = {
    ...obj1,
    ...obj2,
    ...obj3,
  };

  console.log(result);
};
merge();
// antes se usaba el operador concat para concatenar objetos. Se reemplazó por el spread
// const obj3 = obj1.concat(obj2).concat(obj3); // era mas complicado para concatenar
// tambien se pueden mezclar vectores con spread

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayRes = [...array1, ...array2];
console.log(arrayRes);
*/

// promesas
// como Js es asincrónico, va resolviendo las tareas que se ejecutan primero y algunas son mas cortas que otras
// entonces ponemos en espera alguna tarea porque hay otra de la que necesitamos su resultado
// ES6 introdujo el concepto de then (el camino feliz) catch (el camino oscuro)
// API consiste en consultar y consumir servicios externos sin necesidad de desarrollarlos. REST la capa de la arquitectura
/*
const get = (url = "https://rickandmortyapi.com/api/character/") => {
  fetch(url) // método nativo del navegador para traer datos
    .then((response) => response.json()) // primero resuelve esta línea y le pasa el resultado al otro then
    .then((d) => console.log(d))
    .catch((e) => console.error(e));
}; // esto es resolver una promise en ES6

get();
*/
// en Ecma Script 2017 se introduce async await para resolver promesas con el mismo resultado que then
const getAsync = async (url = "https://rickandmortyapi.com/api/character/") => {
  // async await
  try {
    const response = await fetch(url);
    const d = await response.json();
    console.log(d);
  } catch (e) {
    console.error(e);
  }
};
getAsync();
