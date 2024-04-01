// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log();

fetch('https://api.agify.io?name=michael')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
	
  });

  