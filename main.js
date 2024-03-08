
const url = 'https://ipassword-api.vercel.app/generate/20'

function getInfo() {
    axios.get(url)
    .then(response => {
        const data = response.data.password
        mostrarSenha.textContent = JSON.stringify (data)
    })
    .catch(response => console.log(response))
}

getInfo()

