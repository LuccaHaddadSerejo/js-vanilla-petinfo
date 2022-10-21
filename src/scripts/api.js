import { inputErrors } from "../pages/login/index.js"
import { spinnerFunc } from "./spinner.js"
import { createToast } from "./toast.js"

let baseUrl = 'http://localhost:3333/'

async function login(object){
    spinnerFunc('btnLogin')
    try{
        let data = await fetch(`${baseUrl}login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
            })
            console.log(data)
    if(data.status == 200){
        const resp = await data.json()
        localStorage.setItem('user', JSON.stringify(resp))
        setTimeout(() => {  
            window.location.replace('./src/pages/home/index.html');
          }, 3000);
    }else{
        createToast('Usuário não encontrado', 'Crie uma conta em nosso site: ')
        inputErrors()
          btn.innerText = 'Acessar'
        console.log("Usuário não encontrado")
    }
    }catch(err){
        console.log("Usuário não encontrado")
    }
}


async function register(object){
    spinnerFunc('btnRegister')
    try{
        let data = await fetch(`${baseUrl}users/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
            })
        if(data.status == 200){
            createToast('Sua conta foi criada com sucesso!', 'Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: ')
            btn.innerText = 'Cadastrar'
        }else{
            createToast('Usuário já cadastrado', 'Mude o usuário ou o email e tente novamente')
            btn.innerText = 'Cadastrar'
        }
    }catch(err){
        console.log('Usuário já cadastrado')
    }
}


export {register, login}