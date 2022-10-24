import {register} from "../../scripts/api.js";

const registerEvent = () =>{
    const form = document.getElementById('registerTesting')
    const htmlElements = [...form.elements]

    form.addEventListener('submit', async (event) =>{
        event.preventDefault()
        
        const body = {}

        htmlElements.forEach(elt => {
            if(elt.tagName == "INPUT" && elt.value.length !== 0){
                body[elt.id] = elt.value
                elt.value = ''    
            }
        })
        await register(body)
    })
}

const changePageToLogin = () =>{
    const wrapper = document.getElementById('formWrapper')

    wrapper.addEventListener('click', (event)=>{
        if(event.target.id == 'changePageOne' || event.target.id == 'changePageTwo'){
            window.location.replace('../../../index.html')
        }
    })
}

const inputValidation = () =>{
    let newArr = []
    const userInput = document.getElementById('username')
    const userEmail = document.getElementById('email')
    const userPhoto = document.getElementById('avatar')
    const userPassword = document.getElementById('password')
    const btn = document.getElementById('btnRegister')
    newArr.push(userInput,userEmail,userPhoto,userPassword)
    newArr.forEach(elt => {
        elt.addEventListener('keyup', ()=>{
            if(userInput.value.length > 0 && userEmail.value.length > 0 && userPhoto.value.length > 0 && userPassword.value.length > 0){
                btn.disabled = false
                btn.classList.remove('btn_login_disabled')
            }else{
                btn.disabled = true
                btn.classList.add('btn_login_disabled')
            }
        })
    })
}

inputValidation()
registerEvent()
changePageToLogin()