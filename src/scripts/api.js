import { getLocalData } from "./localstorage.js"
import { spinnerFunc } from "./spinner.js"
import { createToast } from "./toast.js"

let baseUrl = 'http://localhost:3333/'

async function login(object){
    spinnerFunc('btnLogin', 'Acessar')
    try{
        let data = await fetch(`${baseUrl}login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(object),
            })
    if(data.status == 200){
        const resp = await data.json()
        localStorage.setItem('user', JSON.stringify(resp))
        setTimeout(() => {  
            window.location.replace('./src/pages/home/index.html');
          }, 3000);
    }else{
        setTimeout(() => {  
            const btn = document.getElementById('btnLogin')
            createToast('Usuário não encontrado', 'Crie uma conta em nosso site!')
            const loginError = document.querySelector('.password_error')
            const inputEmail = document.getElementById('email')
            const inputPassword = document.getElementById('password')
            inputEmail.classList.add('input_error')
            inputPassword.classList.add('input_error')
            loginError.classList.remove('hidden')
            btn.disabled = true
            btn.classList.add('btn_login_disabled') 
        }, 3000);
    }
    }catch(err){
        console.log("Usuário não encontrado")
    }
}

async function register(object){
    spinnerFunc('btnRegister', 'Cadastrar')
    try{
        let data = await fetch(`${baseUrl}users/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
            })
        if(data.status == 200){
            setTimeout(() => {  
                const btn = document.getElementById('btnLogin')
                createToast('Sua conta foi criada com sucesso!', 'Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: ')
                btn.innerText = 'Cadastrar'
                btn.disabled = true
                btn.classList.add('btn_login_disabled') 
              }, 3000);
        }else{
            setTimeout(() => {  
                const btn = document.getElementById('btnLogin')
                createToast('Usuário já cadastrado', 'Mude o usuário ou o email e tente novamente')
                btn.innerText = 'Cadastrar'
                btn.disabled = true
                btn.classList.add('btn_login_disabled') 
              }, 3000);
        }
    }catch(err){
        console.log('Usuário já cadastrado')
    }
}

async function getUser(){
    const localStorage = getLocalData()

    try{
    const data = await fetch (`${baseUrl}users/profile`,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}` 
        }
    })

    const dataJson = await data.json()
    return dataJson
    }catch(err){
        console.log(err)
    }
} 

async function getPosts(){
    const localStorage = getLocalData()
    try {
        const data = await fetch(`${baseUrl}posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}` 
            }
        })
        const dataJson = await data.json()
        return dataJson
    } catch (err) {
        console.log(err)
    }
}

async function createNewPost(object){
    const localStorage = getLocalData()
    try {
        const data = await fetch(`${baseUrl}posts/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(object)
        })
    } catch (err) {
        console.log(err)
    }
}

async function editPost(object, id){
    const localStorage = getLocalData()
    try {
        let data = await fetch(`${baseUrl}posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(object)
        })
    }catch(err){
        console.log(err)
    }
}

async function deletePost(id){
    const localStorage = getLocalData()
    try {
        let data = await fetch(`${baseUrl}posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
        })
        if(data.status == 200){
            createToast('Post deletado com sucesso!', 'O post selecionado para exclusão foi deletado, a partir de agora não aparecerá no seu feed.')
        }
    }catch(err){
        console.log(err)
    }
}

export {register, login, getUser, getPosts, createNewPost, editPost, deletePost}