// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.


const main$$ = document.querySelector("body");
const baseUrl = "https://api.nationalize.io?name=";
const miFetch = async (pepe) => {
    const respuesta = await fetch(baseUrl + pepe);
    const elFetch = await respuesta.json();
    return elFetch.country
    // console.log(country)
    
  };
const agarraInput = () => {
  let miInput$$ = document.querySelector("input");
  const valor = miInput$$.value;
  // console.log(valor)
  return valor;
};

const agarraBtn = () => {
  const mibuton$$ = document.querySelector("button");
  mibuton$$.addEventListener("click", async() => {
    const datos = await miFetch(agarraInput())
    // console.log(datos)
    for (const dato of datos) {
        const contenedor$$ = document.createElement('div')
        pinta(contenedor$$,agarraInput(),dato.country_id,dato.probability)
        creaBtn(contenedor$$)
        main$$.appendChild(contenedor$$)
    }
    // pinta()
  });
};
const pinta=(contenedor,minombre,mipais,miproba)=>{
    const miP$$ = document.createElement('p')
    miP$$.textContent=`El nombre ${minombre} tiene un  ${miproba} porciento de ser de ${mipais}`
    contenedor.appendChild(miP$$)

}
const creaBtn=(contenedor)=>{
    const miBtn$$ = document.createElement('button')
    miBtn$$.textContent=`X`
    contenedor.appendChild(miBtn$$)
    miBtn$$.addEventListener('click',()=>{
   contenedor.remove()
    })
}
const init = async () => {
  agarraBtn();
  // console.log(contries)
};
init();
