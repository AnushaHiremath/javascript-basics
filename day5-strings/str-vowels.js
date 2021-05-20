//arithmetic operators + - * / %
//relational operators < > <= >= == !=
//logical operators || && !

function countVowels(str){
    let result =0
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i] == 'e' || str[i] =='i' ||str[i] == 'o' || str[i] == 'u'){
            result = result +1

        }
    }
    return result
}

console.log(countVowels('bangalore')) //4
console.log(countVowels('dct')) //0