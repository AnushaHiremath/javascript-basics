const arr=[["white","goodness"],["blue","tranquility"]]

function colorAssociation(arr){
    const result =[]
    for(const ele of arr){
        const obj={}
        obj[ele[0]] =ele[1]
        result.push(obj)
    } 
    return result
}
console.log(colorAssociation(arr)) //[ { white: 'goodness' }, { blue: 'tranquility' } ]