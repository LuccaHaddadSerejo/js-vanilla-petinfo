function getLocalData(){
    const localData = JSON.parse(localStorage.getItem('user'))
    return localData
}

export {getLocalData}