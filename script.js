
let email = [];

for (let i = 0; i < 10; i++) {

  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {

    email.push(resp.data.response)

    console.log(email)

  })
}