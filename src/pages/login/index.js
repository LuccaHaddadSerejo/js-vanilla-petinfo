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

// const inputValidation = () =>{
//     const btn = document.getElementById('btnLogin')
//     const form = document.getElementById('formLogin')
//     const elements = [...form.elements]

//     elements.forEach(elt => {
//         if(elt.tagName == "INPUT"){
//             elt.addEventListener('keyup', ()=>{
//                 if(elt.value.length != 0){
//                     btn.disabled
//                 }
//             })
//         }
//     })

// }


userLogin()
changePageToRegister()
