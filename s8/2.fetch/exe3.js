// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';


const miBody$$ = document.querySelector('body')
const recogeInput=()=>{
 const input$$ = document.querySelector('input')
//  console.log(input$$.value)
 return input$$.value
}
const elFetch = async(input)=>{
  const response = await fetch(baseUrl+input)
  const pais = await response.json()
  return pais
}
const recogeBtn =  ()=>{
  const miBtn$$ = document.querySelector('button')
  miBtn$$.addEventListener('click',async()=>{
    const datos = await elFetch(recogeInput())
    console.log(datos)
  })
}
const init = async()=>{
recogeBtn()
}
init()