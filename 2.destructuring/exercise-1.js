// En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

// const gender = game.gender;

// const [action, zombie, survival] = gender;

// console.log(action, zombie, survival);

// let rest;
// const x = [10, 20, 30];

// [diez, veinte, treinta] = x;

// // console.log(diez);
// // console.log(veinte);
// // console.log(treinta);
// [a, b, c] = [10, 20, 30];

const objeto = { w: 1, y: 2, z: 3 };
const { w, y, z } = objeto;

// console.log(w); // 1
// console.log(y); // 2
// console.log(z); // 3

// // console.log(a);
// x[0];
// x[1];
// x[2];
// // Expected output: 10

// // console.log(b);
// // Expected output: 20

// // [a, b, ...rest] = [10, 20, 30, 40, 50];

// // console.log(rest);
// // Expected output: Array [30, 40, 50]
