/*

Enviar un formulario de un registro de empleados de una empresa (Nombre, Apellido, Edad, Email, DNI y puesto(lo dejamos solo en empleado y gerente)) y añadir la data a un array en js, despues calcular y mostrar todos los empleados(no gerentes) mayores a 40 años y armar otro array con todos los gerentes de la empresa.
Mostrar los dos arrays y la cantidad de empleados mayores a 40 años por console.log
*/
const empleados = [
  {
    nombre: "Fernando",
    apellido: "Atencio",
    edad: 44,
    email: "atencio.fernando@gmail.com",
    dni: 25267123,
    puesto: "Gerente",
  },
  {
    nombre: "Claudio",
    apellido: "Lopez",
    edad: 42,
    email: "no_tenia_el_arco_de_frente@gmail.com",
    dni: 264271221,
    puesto: "Gerente",
  },
  {
    nombre: "Guillermo",
    apellido: "Vilas",
    edad: 61,
    email: "gran_willy@gmail.com",
    dni: 13585561,
    puesto: "Empleado",
  },
  {
    nombre: "Diego",
    apellido: "Lopez",
    edad: 30,
    email: "diegol@gmail.com",
    dni: 38456852,
    puesto: "Empleado",
  },
  {
    nombre: "Carlos",
    apellido: "Córdoba",
    edad: 32,
    email: "carlitoscbal@gmail.com",
    dni: 40785365,
    puesto: "Empleado",
  },
  {
    nombre: "Florencia",
    apellido: "Peña",
    edad: 25,
    email: "florciss@gmail.com",
    dni: 41254632,
    puesto: "Empleado",
  },
  {
    nombre: "Teresa",
    apellido: "Robles",
    edad: 52,
    email: "teresinha@gmail.com",
    dni: 15784639,
    puesto: "Empleado",
  },
  {
    nombre: "Natalia",
    apellido: "Fassi",
    edad: 21,
    email: "natyfassi@gmail.com",
    dni: 43158912,
    puesto: "Empleado",
  },
];

const filtrarGerentes = (empleados, puesto = "gerente") => {
  return empleados.filter(
    (empleado) => empleado.puesto.toLowerCase() === puesto
  );
};
const filtrarEmpMayor40 = (empleados, edad, puesto = "empleado") => {
  return empleados.filter(
    (empleado) =>
      empleado.edad > edad && empleado.puesto.toLowerCase() === puesto
  );
};
/*
const mostrarEmpleados = (empleados) => {
  empleados.forEach((empleado) => {
    console.log(empleado);
  });
};

const mostrarEdad = (empleados) => {
  const edad = empleados.map((empleado) => empleado.edad);
  console.log(edad);
};*/
