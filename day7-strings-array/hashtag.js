const str = 'javascript is awesome'

function hashTag(str){
    let result ='#'
    const words = str.split(' ')
    for(const word of words){
        result = result+word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
    return result
}

console.log(hashTag(str)) //'#JavascriptIsAwesome'
console.log(hashTag('dct academy')) //#DctAcademy'
console.log(hashTag('we love this game')) //#WeLoveThisGame'