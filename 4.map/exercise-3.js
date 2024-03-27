// Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

// ```js
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
// ```

const newArr = cities.map(citie => {
    
    if (citie.isVisited === true) {
        const visitedCitie = `${citie.name} ("visitado")`;
        return visitedCitie;
    } else {
        return citie.name
    }
})

console.log(newArr);