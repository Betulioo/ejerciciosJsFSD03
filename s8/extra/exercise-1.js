// fetch("https://rickandmortyapi.com/api/character")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     const misPersonajes = myJson.results;
//     console.log(misPersonajes);

//     for (const personaje of misPersonajes) {
//       const h2$$ = document.createElement("h2");
//       h2$$.textContent = personaje.name;
//       const img$$ = document.createElement("img");
//       img$$.setAttribute("src", personaje.image);

//       document.body.appendChild(h2$$);
//       document.body.appendChild(img$$);
//       console.log(h2$$);
//     }
//   });

//funcion arrow

// //funcion normal
async function getCharacters2() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const misPersonajes = await response.json();

  return misPersonajes;
}
// //funcion arrow

// //funcion normal
async function pintaCharacters2(misPersonajes) {
  //   console.log(misPersonajes.results);
  for (const personaje of misPersonajes) {
    const h2$$ = document.createElement("h2");
    h2$$.textContent = personaje.name;
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", personaje.image);

    document.body.appendChild(h2$$);
    document.body.appendChild(img$$);
    console.log(h2$$);
  }
}
const pintaCharacters = (misPersonajes, funcion) => {
  for (const personaje of misPersonajes) {
    const h2$$ = document.createElement("h2");
    h2$$.textContent = personaje.name;
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", personaje.image);

    document.body.appendChild(h2$$);
    document.body.appendChild(img$$);
    console.log(h2$$);
  }
};

const miFuncion = () => {
  console.log("soy una funcion callback");
};

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const misPersonajes = await response.json();

  return misPersonajes;
};

const inicializar = async () => {
  const misPersonajes = await getCharacters();
  const misPersonajesArray = misPersonajes.results;

  console.log(misPersonajesArray);
  pintaCharacters(misPersonajesArray, miFuncion);
};
inicializar();
