// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text">
//     <button>Consultar</button>
// </body>
// </html>
// ```


const baseUrl = 'https://api.nationalize.io?name=';


  miInput$$ = document.querySelector('input')
  mibuton$$ = document.querySelector(['button']).addEventListener('click',()=>{
    const name = miInput$$.value
    console.log(name)

fetch(baseUrl + name)
.then((response) => {
    return response.json();
  })
  .then((contri) => {
    console.log(contri);
       
  })
  })