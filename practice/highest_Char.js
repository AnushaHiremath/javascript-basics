function highestOccurance(str){
    const result = {}
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (result[char]) {
            result[char]++
        }
        else {
            result[char]=1
        }
    }
    for (let char in result) {
        if (result[char] > max) {
            max = result[char]
            maxChar=char
        }
    }
    return maxChar
}

console.log(highestOccurance('aaaaaaaaaaaaaaabbbbcddee'))