export const selectUnits =(measure)=>{
   let unit 
    switch (measure) {
        case 'piece(s)':
            unit = 'piece(s)'
            break;
    
        case 'piece(s)|Metric':
            unit = ''
            break;
    
        case 'Metric':
            unit = 'Kg(s)'
            break;
    
        case 'Volume':
            unit = 'Litre(s)'
            break;
    
        case 'piece(s)|Metric|Volume':
            unit = ''
            break;
    
        default:
            unit = 'Kg(s)'
            break;
    }
    return unit
}
export const randomStrings =(strings)=>{
    const randNumber = Math.random()
    return strings ===''?'Prod'+ Math.round(randNumber*10000125):strings+ Math.round(randNumber*10000)

}
export const createLastModified = ()=>{
    const dte = new Date()
    const datastore = dte.getTime()
 return datastore
}

export const lastModifiedToDate=(timestamp)=>{
    const dte  = new Date(timestamp)
    return dte.toLocaleDateString()
}
export const lastModifiedWithTime=(timestamp)=>{
    const dte  = new Date(timestamp)
    return dte.toLocaleString()
}