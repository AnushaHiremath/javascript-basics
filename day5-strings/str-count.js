// function strCount(str,count){
//     let result =0
//     for(let i=0;i<str.length;i++){
//         if(str[i] ==char){
//             result = result +1
//         }
//     }
//     return result
// }


function strCount(str,char){
    let result = 0
    for(const c of str){
        if(c == char){
            result++
        }
    }
    return result
}
console.log(strCount('hello', 'l'))
