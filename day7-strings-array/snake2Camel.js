//const str='javascript_is_awesome'

function toCamel(str){
        let result =' '
        const words = str.split(' ') //['javascript','is','awesome']
        result = result + words[0].toLowerCase()
        for(let i=1; i<words.length; i++){
            result =result+words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()
        }
        return result
    }

console.log(toCamel('this is a string')) //'javascriptIsAwesome'