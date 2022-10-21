const createToast = (title, text) => {
    const body = document.querySelector('body')
    const toastWrapper = document.createElement('div')
    const toastDiv = document.createElement('div')
    const toastImg = document.createElement('img')
    const toastTitle = document.createElement('h2')
    const toastParagraph = document.createElement('p')
    const toastLink = document.createElement('a')

 

    toastTitle.innerText = title
    toastParagraph.innerText = text
    
    toastWrapper.classList = 'toast_wrapper animation-1'
    toastDiv.classList.add('toast_div') 
    toastImg.classList.add('toast_img')
    toastParagraph.classList.add('toast_paragraph')
    toastLink.classList.add('toast_link')

    if(title == 'Usuário não encontrado'){
        toastImg.src = "/src/assets/img/Vector.svg"
        toastTitle.classList = 'toast_message_error'
        toastLink.innerText = 'Ir para a página de cadastro'
        toastLink.href = "/assets/pages/register/index.html"
    }else if(title == 'Usuário já cadastrado'){
        toastImg.src = "/src/assets/img/Vector.svg"
        toastTitle.classList = 'toast_message_error'
        toastWrapper.classList = 'toast_wrapper animation-2'
    }else if(title == 'Sua conta foi criada com sucesso!'){
        toastImg.src = "/src/assets/img/Group 17.svg"
        toastTitle.classList = 'toast_message_success'
        toastLink.innerText = 'Ir para a página de login'
        toastLink.href = "../../../index.html"
    }

    toastParagraph.append(toastLink)
    toastDiv.append(toastImg, toastTitle)
    toastWrapper.append(toastDiv, toastParagraph)

    body.appendChild(toastWrapper)
}



export {createToast}