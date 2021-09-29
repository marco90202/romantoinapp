export function ValidateRoman(string){
    let romanNumber = string
    let expression = '^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$'
    const pattern = new RegExp(expression)
    return pattern.test(romanNumber)
}

export function ConvertRoman(string,valid){
    const romanIndex = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500,M: 1000 }
    let responseArray = []
    let sumInt = ''
    if(valid === true){
        for(let i=0;i <string.length ; i++ ){
            if(romanIndex[string[i]] < romanIndex[string[i+1]]){
                responseArray.push(romanIndex[string[i+1]]-romanIndex[string[i]]) 
                i++
                continue
            }else{
                responseArray.push(romanIndex[string[i]])
            }
        }
        sumInt= responseArray.length === 0 ? '' : responseArray.reduce((x,y) => x+y)
    }
    
    return sumInt
}