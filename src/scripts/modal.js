import { getApiData, getCorrectDate } from "../pages/home/index.js"
import { createNewPost, deletePost, editPost, getUser} from "./api.js"


async function modalExit(){
    const userAPI = await getUser()
    const div = document.querySelector('.invis_div')
    const container = document.querySelector('.exit_modal')
    const user = document.getElementById('userAtSign')
    const btn = document.querySelector('.btn_exit')

        div.addEventListener('mouseover', ()=>{
            container.classList.remove('hidden')
        })

        div.addEventListener('mouseout', ()=>{
            container.classList.add('hidden')
        })

    user.innerText = `@${userAPI.username}`
    
    btn.addEventListener('click', ()=>{
        window.location.replace("../../../index.html")
        localStorage.removeItem('user')
    })
} 


const showFullPostModal = (object) =>{
    const wrapper = document.createElement('div')
    const modalContainer = document.createElement('div')
    const modalDivOne = document.createElement('div')
    const modalDivTwo = document.createElement('div')
    const modalImg = document.createElement('img')
    const modalUser = document.createElement('span')
    const modalDivThree = document.createElement('div')
    const modalDate = document.createElement('span')
    const modalCloseBtn = document.createElement('button')
    const modalDivFour = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalContent = document.createElement('p')
    const date = new Date()
    
    modalImg.src = object.user.avatar
    modalUser.innerText = object.user.username
    getCorrectDate(modalDate, date)
    modalTitle.innerText = object.title
    modalContent.innerText = object.content
    modalCloseBtn.innerText = 'X'

    wrapper.classList = 'modal_wrapper'
    modalContainer.classList = 'modal flex_column modal_animation'
    modalDivOne.classList = 'head_modal flex_row justify_between'
    modalDivTwo.classList = 'head_modal_div flex_row align_center'
    modalImg.classList = 'post_img'
    modalUser.classList = 'user_name'
    modalDivThree.classList = 'post_div-1_div-2'
    modalDate.classList = 'post_div-1_div-2_span'
    modalCloseBtn.classList = 'modal_close-btn'
    modalDivFour.classList = 'body_modal_fullPost'
    modalTitle.classList = 'modal_fullPost_title'
    modalContent.classList = 'modal_fullPost_paragraph'

    modalCloseBtn.addEventListener('click', ()=>{
        wrapper.remove()
    })

    modalDivThree.append(modalDate)
    modalDivTwo.append(modalImg, modalUser ,modalDivThree)
    modalDivOne.append(modalDivTwo, modalCloseBtn)
    modalDivFour.append(modalTitle, modalContent)
    modalContainer.append(modalDivOne, modalDivFour)
    wrapper.append(modalContainer)
    return wrapper
}


const newPostModal = () => {
    const listPosts = document.getElementById('completePostList')
    const wrapper = document.createElement('div')
    const modalContainer = document.createElement('div')
    const modalDivOne = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalCloseBtn = document.createElement('button')
    const modalForm = document.createElement('form')
    const modalLabelOne = document.createElement('label')
    const modalInputTitle = document.createElement('input')
    const modalLabelTwo = document.createElement('label')
    const modalTextArea = document.createElement('textarea')
    const modalDivThree = document.createElement('div')
    const modalBtnCancel = document.createElement('button')
    const modalBtnPublish = document.createElement('button')

    
    modalTitle.innerText = 'Criando novo post'
    modalCloseBtn.innerText = 'X'
    modalLabelOne.innerText = 'Título do post'
    modalInputTitle.placeholder = 'Digite o título aqui...'
    modalLabelTwo.innerText = 'Conteúdo do post'
    modalTextArea.placeholder = "Desenvolva o conteúdo do post aqui..."
    modalBtnCancel.innerText = 'Cancelar'
    modalBtnPublish.innerText = 'Publicar'

    modalInputTitle.id = "title"
    modalTextArea.id = "content"

    wrapper.classList = 'modal_wrapper'
    modalContainer.classList = 'modal flex_column modal_animation'
    modalDivOne.classList = 'head_modal flex_row justify_between'
    modalTitle.classList = 'modal_title'
    modalCloseBtn.classList = 'modal_close-btn'
    modalForm.classList = 'body_modal_edit flex_column'
    modalLabelOne.classList = 'editLabel'
    modalInputTitle.classList = 'input editTextInput'
    modalLabelTwo.classList = 'editLabel'
    modalTextArea.classList = 'editTextInput input editTA_content'
    modalDivThree.classList = 'footer_modal_edit flex_row justify_end'
    modalBtnCancel.classList = 'button modal_cancel-btn'
    modalBtnPublish.classList = 'button modal_edit-btn login_register-btn'

    modalCloseBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        wrapper.remove()
    })

    modalBtnCancel.addEventListener('click', (event)=>{
        event.preventDefault()
        wrapper.remove()
    })

    modalBtnPublish.addEventListener('click', async(event)=>{
        event.preventDefault()
        const elements = [...modalForm.elements]
        console.log(elements)
        listPosts.innerHTML = ''

        const newPostBody = {}

        elements.forEach(elt =>{
            if(elt.value != 0){
                newPostBody[elt.id] = elt.value
            }
        })

        await createNewPost(newPostBody)
        getApiData()
        wrapper.remove()
    })

    modalDivOne.append(modalTitle, modalCloseBtn)
    modalForm.append(modalLabelOne, modalInputTitle, modalLabelTwo, modalTextArea)
    modalDivThree.append(modalBtnCancel, modalBtnPublish)
    modalContainer.append(modalDivOne, modalForm, modalDivThree)
    wrapper.append(modalContainer)
    return wrapper
}

const editPostModal = (object) => {
    const listPosts = document.getElementById('completePostList')
    const wrapper = document.createElement('div')
    const modalContainer = document.createElement('div')
    const modalDivOne = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalCloseBtn = document.createElement('button')
    const modalForm = document.createElement('form')
    const modalLabelOne = document.createElement('label')
    const modalInputTitle = document.createElement('textarea')
    const modalLabelTwo = document.createElement('label')
    const modalTextArea = document.createElement('textarea')
    const modalDivThree = document.createElement('div')
    const modalBtnCancel = document.createElement('button')
    const modalBtnEdit = document.createElement('button')
    
    
    modalTitle.innerText = 'Edição'
    modalCloseBtn.innerText = 'X'
    modalLabelOne.innerText = 'Título do post'
    modalInputTitle.innerText = object.title
    modalLabelTwo.innerText = 'Conteúdo do post'
    modalTextArea.innerText = object.content
    modalBtnCancel.innerText = 'Cancelar'
    modalBtnEdit.innerText = 'Salvar'

    wrapper.classList = 'modal_wrapper'
    modalContainer.classList = 'modal flex_column modal_animation'
    modalDivOne.classList = 'head_modal flex_row justify_between'
    modalTitle.classList = 'modal_title'
    modalCloseBtn.classList = 'modal_close-btn'
    modalForm.classList = 'body_modal_edit flex_column'
    modalLabelOne.classList = 'editLabel'
    modalInputTitle.classList = 'input editTextInput editTA_title'
    modalLabelTwo.classList = 'editLabel'
    modalTextArea.classList = 'ditTextInput input editTA_content'
    modalDivThree.classList = 'footer_modal_edit flex_row justify_end'
    modalBtnCancel.classList = 'button modal_cancel-btn'
    modalBtnEdit.classList = 'button modal_edit-btn login_register-btn'

    wrapper.id = 'wrapperEdit'
    modalForm.id = "formEdit"
    modalBtnEdit.id = "confirmEdit"
    modalInputTitle.id = "title"
    modalTextArea.id = "content"

    modalCloseBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        wrapper.remove()
    })

    modalBtnCancel.addEventListener('click', (event)=>{
        event.preventDefault()
        wrapper.remove()
    })

    modalBtnEdit.addEventListener('click', async ()=>{
        const elements = [...modalForm.elements]
        listPosts.innerHTML = ''

        const editBody = {}

        elements.forEach(elt =>{
            if(elt.tagName == "TEXTAREA" && elt.value != 0){
                    editBody[elt.id] = elt.value
                }
            })
    
        await editPost(editBody, object.id)
        getApiData()
        wrapper.remove()
    })

    modalDivOne.append(modalTitle, modalCloseBtn)
    modalForm.append(modalLabelOne, modalInputTitle, modalLabelTwo, modalTextArea)
    modalDivThree.append(modalBtnCancel, modalBtnEdit)
    modalContainer.append(modalDivOne, modalForm, modalDivThree)
    wrapper.append(modalContainer)
    return wrapper
}

const ExcludePostModal = (object) =>{
    const wrapper = document.createElement('div')
    const modalContainer = document.createElement('div')
    const modalDivOne = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalCloseBtn = document.createElement('button')
    const modalDivTwo = document.createElement('div')
    const modalMessage = document.createElement('h2')
    const modalParagraph = document.createElement('p')
    const modalDivThree = document.createElement('div')
    const modalBtnCancel = document.createElement('button')
    const modalBtnDelete = document.createElement('button')
    

    wrapper.classList = 'modal_wrapper'
    modalContainer.classList = 'modal flex_column modal_animation'
    modalDivOne.classList = 'head_modal flex_row justify_between'
    modalTitle.classList = 'modal_title'
    modalCloseBtn.classList = 'modal_close-btn'
    modalDivTwo.classList = 'body_modal_exclude flex_column'
    modalMessage.classList = 'modal_exclude_title'
    modalParagraph.classList = 'modal_exclude_paragraph'
    modalDivThree.classList = 'footer_modal_exclude flex_row'
    modalBtnCancel.classList = 'button modal_cancel-btn'
    modalBtnDelete.classList = 'modal_exclude_post-btn'

    modalTitle.innerText = 'Confirmação de exclusão'
    modalMessage.innerText = 'Tem certeza que deseja excluir este post?'
    modalParagraph.innerText = 'Esta ação não poderá ser desfeita, então pedimos cautela antes de concluir'
    modalCloseBtn.innerText = 'X'
    modalBtnCancel.innerText = 'Cancelar'
    modalBtnDelete.innerText = 'Sim, excluir este post'

    modalBtnDelete.id = "confirmDelete"
    wrapper.id = 'deleteWrapper'

    modalCloseBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        wrapper.remove()
    })

    modalBtnCancel.addEventListener('click', (event)=>{
        event.preventDefault()
        wrapper.remove()
    })

    modalBtnDelete.addEventListener('click', async (event)=>{
        const listPosts = document.getElementById('completePostList')
        event.preventDefault()  
        listPosts.innerHTML = ''
        await deletePost(object.id)
        getApiData()
        wrapper.remove()
    })

    modalDivOne.append(modalTitle, modalCloseBtn)
    modalDivTwo.append(modalMessage, modalParagraph)
    modalDivThree.append(modalBtnCancel, modalBtnDelete)
    modalContainer.append(modalDivOne, modalDivTwo, modalDivThree)
    wrapper.append(modalContainer)
    return wrapper
}

const renderFullPostModal = (object) =>{
    const main = document.querySelector('.main')
    main.append(showFullPostModal(object))
}

const renderEditPost = (object) =>{
    const main = document.querySelector('.main')
    main.append(editPostModal(object))
}

const renderNewPostModal = () =>{
    const main = document.querySelector('.main')
    main.append(newPostModal())
}

const renderExcludePostModal = (object) =>{
    const main = document.querySelector('.main')
    main.append(ExcludePostModal(object))
}

export {
    renderFullPostModal, 
    renderNewPostModal, 
    renderExcludePostModal, 
    renderEditPost,
    modalExit,
}