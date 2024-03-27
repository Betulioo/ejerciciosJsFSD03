// //Funcion normal

function nombreFuncion(parametro1 = 10, parametro2 = 5) {
  console.log(parametro1 + parametro2);
}
nombreFuncion();

function sumar(a = 10, b = 5) {
  console.log(a + b);
}

sumar(10, 5); //ejecucion de funcion con argumentos

// //funcion Arrow

const suma = (a = 10, b = 5) => {
  return a + b;
};
const suma2 = (a = 10, b = 5) => {
  let resultado = a + b;
  return resultado + 20;
};

// suma();
console.log(resultado);
// let valorDeMiFuncion = suma2();

// console.log(valorDeMiFuncion + suma());
const nombreFuncionArrow = (parametro1 = 10, parametro2 = 5) =>
  parametro1 + parametro2;

// console.log(nombreFuncionArrow());
