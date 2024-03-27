// En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

// ```js
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction(); //el valor de la funcion es { name: "Bengal Tiger", race: "Tiger" }
console.log(name, race);

const miObjeto = {
  nombre: "Bengal Tiger",
  raza: "Tiger",
  otraPropiedad: "mi otra propiedad",
};
const { nombre, raza, otraPropiedad } = miObjeto;
console.log(nombre, raza, otraPropiedad);
