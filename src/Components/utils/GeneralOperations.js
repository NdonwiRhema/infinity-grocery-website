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