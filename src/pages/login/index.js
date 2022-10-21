import {register, login} from "../../scripts/api.js";

const userLogin = () =>{
    const form = document.getElementById('formLogin')
    const elements = [...form.elements]
    

    form.addEventListener('submit', async (event)=>{
        event.preventDefault()
   
        let body = {}

        elements.forEach(elt =>{
            if(elt.tagName == "INPUT" && elt.value !== 0)
            body[elt.id] = elt.value
            elt.value = ''
        })
        await login(body)
    })
}

const changePageToRegister = () =>{
    const btn = document.getElementById('changePageBtn')

    btn.addEventListener('click', (event)=>{
        event.preventDefault()
        window.location.replace('./src/pages/register/index.html')      
    })
}

const inputErrors = () =>{
    const loginError = document.querySelector('.password_error')
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')
    inputEmail.classList.add('input_error')
    inputPassword.classList.add('input_error')
    loginError.classList.remove('hidden')
    setTimeout(() => {
        loginError.classList.add('hidden')
        inputEmail.classList.remove('input_error')
        inputPassword.classList.remove('input_error')
      }, 5000);
}

const validateLogin = () =>{
    let newArr = []
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')
    const btn = document.getElementById('btnLogin')
    newArr.push(inputEmail)
    newArr.push(inputPassword)
    newArr.forEach(element => {
        element.addEventListener('keyup', () =>{
            if(inputEmail.value.length > 0 && inputPassword.value.length > 0){
                btn.disabled = false
                btn.classList.remove('btn_login_disabled')
            }else{
                btn.disabled = true
                btn.classList.add('btn_login_disabled')
            }
        }) 
    })
}


validateLogin()
userLogin()
changePageToRegister()

export {inputErrors}
