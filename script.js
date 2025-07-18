
let email = [];

for (let i = 0; i < 10; i++) {
  // ciclo per 10 volte (i<10)
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
    // faccio axios.get(link) per ottenere i dati che mi servono
    email.push(resp.data.response)
    // pusho in email il dato che mi serve
    console.log(email)
    // printo le mail in console
  })
  // il tutto avviene 10 volte perchè l'ho impostato su 10
}

// aspè, cicla male, sara un problema di domani