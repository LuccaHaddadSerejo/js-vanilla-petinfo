import { getUser, getPosts} from "../../scripts/api.js"
import { getLocalData } from "../../scripts/localstorage.js"
import {renderNewPostModal, modalExit, renderFullPostModal, renderEditPost, renderExcludePostModal} from "../../scripts/modal.js"


function verifyPermission(){
    const user = getLocalData()
    if(user == []){
        window.location.replace('../../../index.html')
    }
}

verifyPermission()

async function createHeader(){
    const user = await getUser()
    const btnCreate = document.getElementById('createPostBtn')
    const imgUser = document.getElementById('headerImg')
    imgUser.src = user.avatar
    imgUser.addEventListener('error', () => {
        imgUser.src ='../../assets/img/brokenImg.png'
    })

    btnCreate.addEventListener('click', ()=>{
        renderNewPostModal()
    })
}

createHeader()

function getCorrectDate(value, date){
    if(date.getMonth() == 0){
        value.innerText = `Janeiro de ${date.getFullYear()}`
    }else if(date.getMonth() == 1){
        value.innerText = `Fevereiro de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 2){
        value.innerText = `Março de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 3){
        value.innerText = `Abril de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 4){
        value.innerText = `Maio de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 5){
        value.innerText = `Junho de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 6){
        value.innerText = `Julho de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 7){
        value.innerText = `Agosto de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 8){
        value.innerText = `Setembro de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 9){
        value.innerText = `Outubro de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 10){
        value.innerText = `Novembro de ${date.getFullYear()}`
    }
    else if(date.getMonth() == 11){
        value.innerText = `Dezembro de ${date.getFullYear()}`
    }
}

function textLimit(value, eltTitle, eltContent){
    if(value.title.length > 145){
        let newStr = ""
        newStr =  value.title.substring(0,145)
        eltTitle.innerText = `${newStr}...`
    }else{
        eltTitle.innerText = value.title
    }
    if(value.content.length > 145){
        let newStr = ""
        newStr =  value.content.substring(0,145)
        eltContent.innerText = `${newStr}...`
    }else{
        eltContent.innerText = value.content
    }
}

async function createPost(arr){
    const user = await getUser()
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
        postImg.addEventListener('error', () => {
            postImg.src ='../../assets/img/brokenImg.png'
        })
        postUser.innerText = post.user.username
        postBtnThree.innerText = 'Acessar publicação'   
        getCorrectDate(postDate, date)
        textLimit(post, postTitle, postParagraph)
       
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
            renderFullPostModal(post)
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
            renderEditPost(post)
        })

        postBtnTwo.addEventListener('click', (event) =>{
            event.preventDefault()
            renderExcludePostModal(post)
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

export{getApiData, getCorrectDate}




