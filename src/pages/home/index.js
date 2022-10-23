import { getUser } from "../../scripts/api.js"
import { getLocalData } from "../../scripts/localstorage.js"
import {renderEditAndCreatePostModal, renderFullPostModal, renderExcludePostModal} from "../../scripts/modal.js"


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
    const imgUser = document.getElementById('headerImg')
    imgUser.src = user.avatar
}

createHeader()

const createPost = () => {
    const postFull = document.createElement('li')
    const postDivOne = document.createElement('div')
    const postDivTwo = document.createElement('div')
    const postImg = document.createElement('img')
    const postUser = document.createElement('span')
    const postDivThree = document.createElement('div')
    const postDate = document.createElement('span')
    const postDivFour = document.createElement('div')
    const postBtnOne = document.createElement('button')
    const postBtnTwo = document.createElement('button')
    const postTitle = document.createElement('h2')
    const postParagraph = document.createElement('p')
    const postBtnThree = document.createElement('button')

    postFull.classList = 'post flex_column'
    postDivOne.classList = 'post_div-1 flex_row justify_between'
    postDivTwo.classList = 'post_div-1_div-1 flex_row align_center'
    postImg.classList = 'post_img'
    postUser.classList = 'user_name'
    postDivThree.classList = 'post_div-1_div-2'
    postDate.classList = 'post_div-1_div-2_span'
    postDivFour.classList = 'post_div-1_div-3 flex_row justify_between'
    postBtnOne.classList = 'post_div-1_div-2_btn-1 edit_post-btn'
    postBtnTwo.classList = 'post_div-1_div-2_btn-2 edit_post-btn exclude_post-btn'
    postTitle.classList = 'post_title'
    postParagraph.classList = 'post_paragraph'
    postBtnThree.classList = 'post_btn invis-btn'


    postBtnOne.addEventListener('click', (event)=>{
        event.preventDefault()
        renderEditAndCreatePostModal()
    })

    postBtnTwo.addEventListener('click', (event) =>{
        event.preventDefault()
        renderExcludePostModal()
    })

    postBtnThree.addEventListener('click', (event) =>{
        event.preventDefault()
        renderFullPostModal()
    })

    postDivThree.append(postDate)
    postDivTwo.append(postImg, postUser, postDivThree)
    postDivOne.append(postBtnTwo)
    postDivFour.append(postBtnOne, postBtnTwo)
    postFull.append(postBtnOne, postDivFour, postTitle, postParagraph, postBtnThree)

    return postFull
}


const render = (arr) => {
    const listPosts = document.getElementById('completePostList')
    arr.forEach(post =>{
        listPosts.append(createPost())
    })  
}






