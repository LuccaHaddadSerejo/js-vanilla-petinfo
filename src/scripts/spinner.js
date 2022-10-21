
const spinnerFunc = (id, text) => {
    let btn = document.getElementById(id)
    btn.innerText = ''
    const spinnerImg = document.createElement('img')
    spinnerImg.src = '/src/assets/img/spinner.svg'
    spinnerImg.classList.add('loading')
    btn.appendChild(spinnerImg)
    setTimeout(() => {
        btn.innerText = text
    }, 3000)
}

export {spinnerFunc}