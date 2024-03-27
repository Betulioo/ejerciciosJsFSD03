// Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

// ```js
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
// ```

//funcion map que recibe una funcion normal
const miArrayNuevo = users.map(function (elemento) {
  return elemento.name;
});
//funcion map que recibe una funcion arrow

const mapear = users.map((elemento) => {
  return elemento.name;
});

//funcion map que recibe una funcion arrow, simplificada en una linea.
const mapear2 = users.map((elemento) => elemento.name);

console.log(miArrayNuevo);
console.log(users);
// console.log(users.map((user) => user.name));
// const arrayNuevoMap = users.map(function (user) {
//   return { nombre: user.name, ide: user.id };
// });

// console.log(arrayNuevoMap);
