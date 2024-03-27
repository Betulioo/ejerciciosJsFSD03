// Dado el siguiente array, devuelve una lista=array que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

// ```js
const usuarios = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
// ```

const listaDevuelta = usuarios.map(function (usuario) {
  if (usuario.name.includes("A")) {
    usuario.name = "Anacleto";
  }
  return usuario.name;
});

console.log(listaDevuelta);

const listaDevueltaArrow = usuarios.map((usuario) => {
  if (usuario.name.includes("A")) {
    usuario.name = "Anacleto";
  }
  return usuario.name;
});

console.log(listaDevueltaArrow);
// const names = users.map(user => {
//     if (user.name.includes('A')) {
//       return user.name = 'Anacleto'
//     } else {
//         return user.name
//     }
// })

// console.log(names);
