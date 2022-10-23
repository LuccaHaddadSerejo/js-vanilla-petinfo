const createFullPostModal = () =>{
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

    modalCloseBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        main.remove(wrapper)
    })

    modalDivThree.append(modalDate)
    modalDivTwo.append(modalImg, modalUser ,modalDivThree)
    modalDivOne.append(modalDivTwo, modalCloseBtn)
    modalDivFour.append(modalTitle, modalContent)
    modalContainer.append(modalDivOne, modalDivFour)
    wrapper.append(modalContainer)
    return wrapper
}

const createEditPostModal = () => {
    const main = document.querySelector('.main')
    const wrapper = document.createElement('div')
    const modalContainer = document.createElement('div')
    const modalDivOne = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalCloseBtn = document.createElement('button')
    const modalDivTwo = document.createElement('div')
    const modalLabelOne = document.createElement('label')
    const modalInputTitle = document.createElement('input')
    const modalLabelTwo = document.createElement('label')
    const modalTextArea = document.createElement('textarea')
    const modalDivThree = document.createElement('div')
    const modalBtnCancel = document.createElement('button')
    const modalBtnEdit = document.createElement('button')

    wrapper.classList = 'modal_wrapper'
    modalContainer.classList = 'modal flex_column'
    modalDivOne.classList = 'head_modal flex_row justify_between'
    modalTitle.classList = 'modal_title'
    modalCloseBtn.classList = 'modal_close-btn'
    modalDivTwo.classList = 'body_modal_edit flex_column'
    modalLabelOne.classList = 'editLabel'
    modalInputTitle.classList = 'input editTextInput'
    modalLabelTwo.classList = 'editLabel'
    modalTextArea.classList = 'editTextInput input editTA'
    modalDivThree.classList = 'footer_modal_edit flex_row justify_end'
    modalBtnCancel.classList = 'button modal_cancel-btn'
    modalBtnEdit.classList = 'button modal_edit-btn login_regist-btn'


    modalCloseBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        main.remove(wrapper)
    })

    modalBtnCancel.addEventListener('click', (event)=>{
        event.preventDefault()
        main.remove(wrapper)
    })

    modalDivOne.append(modalTitle, modalCloseBtn)
    modalDivTwo.append(modalLabelOne, modalInputTitle, modalLabelTwo, modalTextArea)
    modalDivThree.append(modalBtnCancel, modalBtnEdit)
    modalContainer.append(modalDivOne, modalDivTwo, modalDivThree)
    wrapper.append(modalContainer)
    return wrapper
}

const createExcludePostModal = () =>{
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
    modalBtnCancel.innerText = 'Cancelar'
    modalBtnDelete.innerText = 'Sim, excluir este post'

    modalCloseBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        main.remove(wrapper)
    })

    modalBtnCancel.addEventListener('click', (event)=>{
        event.preventDefault()
        main.remove(wrapper)
    })

    modalDivOne.append(modalTitle, modalCloseBtn)
    modalDivTwo.append(modalMessage, modalParagraph)
    modalDivThree.append(modalBtnCancel, modalBtnDelete)
    modalContainer.append(modalDivOne, modalDivTwo, modalDivThree)
    wrapper.append(modalContainer)
    return wrapper
}

const renderFullPostModal = () =>{
    const main = document.querySelector('.main')
    main.append(createFullPostModal())
}

const renderEditAndCreatePostModal = () =>{
    const main = document.querySelector('.main')
    main.append(createEditPostModal())
}

const renderExcludePostModal = () =>{
    const main = document.querySelector('.main')
    main.append(createExcludePostModal())
}


export {renderFullPostModal, renderEditAndCreatePostModal, renderExcludePostModal}