
// let email = [];

// for (let i = 0; i < 10; i++) {
//   // ciclo per 10 volte (i<10)
//   axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
//     // faccio axios.get(link) per ottenere i dati che mi servono
//     email.push(resp.data.response)
//     // pusho in email il dato che mi serve
//     console.log(email)
//     // printo le mail in console
//   })
//   // il tutto avviene 10 volte perchè l'ho impostato su 10
// }

// // aspè, cicla male, sara un problema di domani

let email = [];
let completedRequests = 0;
// ecco cosa mancava

for (let i = 0; i < 10; i++) {
  axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
    // ! aggiungo la const emailValue e suddivido emailValue e email.push
    const emailValue = resp.data.response;
    email.push(emailValue);
    completedRequests++;


    // ! metto qui le const della lista html
    const ul = document.getElementById(`email-list`);
    const li = document.getElement(`li`);
    li.textContent = emailValue;
    ul.appendChild(li);

    // al raggiungimento di 10 stampa l'array, extra step perchè mi dava fastidio
    if (completedRequests === 10) {
      console.log(email);
    }
  });

}
// * molto meglio, rigraziamo internet e quei benedetti di stackOverFlow