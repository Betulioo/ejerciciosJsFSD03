const runTimeOut = () => {
  const promise = new Promise((resolve, reject) => {
    fetch("http://localhost:3000/movies")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!response) {
          throw new Error("Error fetch beto");
        }
        return response.json();
      })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error + "hola error beto");
      });
  });

  promise
    .then(() => {
      console.log("Time out!");
    })
    .catch((error) => {
      console.error("error creado por beto" + error);
    });
};

runTimeOut();
