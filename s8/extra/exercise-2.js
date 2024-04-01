fetch("http://localhost:3000/diary")
  .then((response) => {
    return response.json();
  })
  .then((citas) => {
    // console.log(citas);
    //funcion sort que recibe una funcion arrow
    // citas.sort((a, b) =>  new Date(a.date) - new Date(b.date));

    //funcion sort que recibe una funcion normal
    citas.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    console.log(citas);
    for (const element of citas) {
      console.log(element);
    }
  });
