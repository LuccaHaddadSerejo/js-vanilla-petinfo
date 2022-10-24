import { getUser, getPosts, editPost, deletePost} from "../../scripts/api.js"
import { getLocalData } from "../../scripts/localstorage.js"
import {renderNewPostModal, sendPost, modalExit} from "../../scripts/modal.js"


const verifyPermission = () =>{
    const user = getLocalData()
    console.log(user)
    if(user == ""){
        window.location.replace('../../../index.html')
    }
}

verifyPermission()

async function createHeader(){
    const user = await getUser()
    const btnCreate = document.getElementById('createPostBtn')
    const imgUser = document.getElementById('headerImg')
    imgUser.src = user.avatar

    btnCreate.addEventListener('click', ()=>{
        renderNewPostModal()
        sendPost()
    })
}

createHeader()

async function createPost(arr){
    const user = await getUser()
    console.log(user)
    const listPosts = document.getElementById('completePostList')

    arr.slice().reverse().forEach(post => {
        const postFull = document.createElement('li')
        const postDivOne = document.createElement('div')
        const postDivTwo = document.createElement('div')
        const postImg = document.createElement('img')
        const postUser = document.createElement('span')
        const postDivThree = document.createElement('div')
        const postDate = document.createElement('span')
        const postDivFour = document.createElement('div')
    
        const postTitle = document.createElement('h2')
        const postParagraph = document.createElement('p')
        const postBtnThree = document.createElement('button')

        const date = new Date()
    
        postImg.src = post.user.avatar
        postUser.innerText = post.user.username
        postDate.innerText = 'Outubro de 2022'

        postTitle.innerText = post.title

        if(post.content.length > 145){
            let newStr = ""
            newStr =  post.content.substring(0,145)
            postParagraph.innerText = `${newStr}...`
        }else{
            postParagraph.innerText = post.content
        }
        
        
        postBtnThree.innerText = 'Acessar publicação'
    
        postFull.classList = 'post flex_column'
        postDivOne.classList = 'post_div-1 flex_row justify_between'
        postDivTwo.classList = 'post_div-1_div-1 flex_row align_center'
        postImg.classList = 'post_img'
        postUser.classList = 'user_name'
        postDivThree.classList = 'post_div-1_div-2'
        postDate.classList = 'post_div-1_div-2_span'
        postDivFour.classList = 'post_div-1_div-3 flex_row justify_between'
    
        postTitle.classList = 'post_title'
        postParagraph.classList = 'post_paragraph'
        postBtnThree.classList = 'post_btn invis-btn'
    
        postBtnThree.addEventListener('click', (event) =>{
            event.preventDefault()
            const main = document.querySelector('.main')
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
            
            modalImg.src = post.user.avatar
            modalUser.innerText = post.user.username
            modalDate.innerText = `${date.getMonth()} de ${date.getFullYear()}` 
            modalTitle.innerText = post.title
            modalContent.innerText = post.content
            modalCloseBtn.innerText = 'X'

            wrapper.classList = 'modal_wrapper'
            modalContainer.classList = 'modal flex_column'
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
            main.append(wrapper)
        })

    if(post.user.id == user.id){
        const postBtnOne = document.createElement('button')
        const postBtnTwo = document.createElement('button')

        postBtnOne.innerText = "Editar"
        postBtnTwo.innerText = "Excluir"

        postBtnOne.classList = 'post_div-1_div-2_btn-1 edit_post-btn'
        postBtnTwo.classList = 'post_div-1_div-2_btn-2 edit_post-btn exclude_post-btn'

        postBtnOne.addEventListener('click', (event)=>{
            event.preventDefault()
            const main = document.querySelector('.main')
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
            modalInputTitle.innerText = post.title
            modalLabelTwo.innerText = 'Conteúdo do post'
            modalTextArea.innerText = post.content
            modalBtnCancel.innerText = 'Cancelar'
            modalBtnEdit.innerText = 'Salvar alterações'
        
            wrapper.classList = 'modal_wrapper'
            modalContainer.classList = 'modal flex_column'
            modalDivOne.classList = 'head_modal flex_row justify_between'
            modalTitle.classList = 'modal_title'
            modalCloseBtn.classList = 'modal_close-btn'
            modalForm.classList = 'body_modal_edit flex_column'
            modalLabelOne.classList = 'editLabel'
            modalInputTitle.classList = 'input editTextInput editTA_title'
            modalLabelTwo.classList = 'editLabel'
            modalTextArea.classList = 'editTextInput input editTA_content'
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
            
                await editPost(editBody, post.id)
                getApiData()
                wrapper.remove()
            })
        
            modalDivOne.append(modalTitle, modalCloseBtn)
            modalForm.append(modalLabelOne, modalInputTitle, modalLabelTwo, modalTextArea)
            modalDivThree.append(modalBtnCancel, modalBtnEdit)
            modalContainer.append(modalDivOne, modalForm, modalDivThree)
            wrapper.append(modalContainer)
            main.append(wrapper)
        })

        postBtnTwo.addEventListener('click', (event) =>{
            event.preventDefault()
            const main = document.querySelector('.main')
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
            modalContainer.classList = 'modal flex_column'
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

            modalBtnDelete.addEventListener('click', async ()=>{
                event.preventDefault()  
                listPosts.innerHTML = ''
                await deletePost(post.id)
                getApiData()
                wrapper.remove()
            })

            modalDivOne.append(modalTitle, modalCloseBtn)
            modalDivTwo.append(modalMessage, modalParagraph)
            modalDivThree.append(modalBtnCancel, modalBtnDelete)
            modalContainer.append(modalDivOne, modalDivTwo, modalDivThree)
            wrapper.append(modalContainer)
            main.append(wrapper)
        })

        postDivFour.append(postBtnOne, postBtnTwo)
    }

    postDivThree.append(postDate)
    postDivTwo.append(postImg, postUser, postDivThree)
    postDivOne.append(postDivTwo, postDivFour)
    postFull.append(postDivOne, postTitle, postParagraph, postBtnThree)
    listPosts.append(postFull)
    })  
    return listPosts
}

async function getApiData(){
    const data = await getPosts()
    createPost(data)
}

getApiData()
modalExit()

export{getApiData}




