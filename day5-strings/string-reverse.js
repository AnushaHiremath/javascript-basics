const str= 'javascript'

function reverseStr(str){
    let output = ''
    for(let i=str.length-1;i>=0;i--){
      // console.log(i,str[i])
        output=output+str[i]
    }
    return output
}

console.log(reverseStr(str))