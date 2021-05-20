function isString(str) {
    for (let i = 0; i < str.length; i++){
        if (typeof(str) == 'string') {
            return true
        }
    }
    return false
}
console.log(isString('DCT Academy'))
console.log(isString([1,2,4,0]))