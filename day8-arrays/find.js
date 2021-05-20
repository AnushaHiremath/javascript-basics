const numbers = [10,20,30,40,50]

//indexOf(30) >= 0 || include(30) ==
//find based on a condition = first element greater than 35?

//c styled
function findEle(numbers){
    let result 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] > 35){
            result = numbers[i]
            break
        }
    }
    return result
}

console.log(findEle(numbers))  //40

//const numbers = [10,20,30,40,50]
//es6 styled

function findEleJs (numbers){
    const result = numbers.find(function(ele){
        return ele > 35
    })              
    return result
}


console.log(findEleJs(numbers)) //40