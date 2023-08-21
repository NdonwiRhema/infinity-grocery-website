export const loadLocalStorage = (data,field)=>{
    const stringedData = JSON.stringify(data)
    localStorage.setItem(field,stringedData)
}
export const pullLocalStorage =(field)=>{
    let Data
    if(localStorage.getItem(field)){
       Data = JSON.parse(localStorage.getItem(field))
    }
    else{
        Data =[]
    }
   
    return Data
}