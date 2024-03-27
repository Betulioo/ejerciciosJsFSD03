// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

// ```js
const ciudades = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: true, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
// ```

//confuncion normal
const nuevaLista = ciudades.map(function (ciudad) {
  if (ciudad.isVisited === true) {
    ciudad.name = ciudad.name + "(Visitado)";
  }

  return ciudad;
});

console.log(nuevaLista);

//con funcionArrow
// const nuevaLista2 = ciudades.map((ciudad) => {
//   if (ciudad.isVisited === true) {
//     ciudad.name = ciudad.name + "(Visitado)";
//   }

//   return ciudad;
// });
// console.log(nuevaLista2);
// const newArr = cities.map(citie => {

//     if (citie.isVisited === true) {
//         const visitedCitie = `${citie.name} ("visitado")`;
//         return visitedCitie;
//     } else {
//         return citie.name
//     }
// })

// console.log(newArr);
