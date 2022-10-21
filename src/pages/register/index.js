import {register} from "../../scripts/api.js";






const registerEvent = () =>{
    const form = document.getElementById('registerForm')
    const htmlElements = [...form.elements]

    form.addEventListener('submit', async (event) =>{
        event.preventDefault()
        
        const body = {}

        htmlElements.forEach(elt => {
            if(elt.tagName == "INPUT" && elt.value.length !== 0){
                body[elt.id] = elt.value    
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


registerEvent()
changePageToLogin()