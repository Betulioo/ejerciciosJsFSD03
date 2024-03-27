// Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
// , usando spread operatos.

// ```js
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
// ```

const copiaArray = [...colors];
// console.log(copiaArray + " copia Array sin modificar");
copiaArray.splice(1, 1);
console.log(copiaArray + " copia Array modificada");
// console.log(colors + " Array sin modificar");
// const colorPy = [...colors];

// colorPy.splice(1, 1);

// console.log(colors);
// console.log(colorPy);
