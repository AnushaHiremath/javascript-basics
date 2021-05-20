const str='ddctdac'

function frequency(str){
    const result ={}
    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char] = result[char] +1
        }else{
            result[char] = 1
        }
    }
    return result
}

console.log(frequency(str)) //{ d: 3, c: 2, t: 1, a: 1 }
console.log(frequency('nnaatut'))//{ n: 2, a: 2, t: 2, u: 1 }