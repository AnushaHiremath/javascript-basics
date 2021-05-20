const article={
    id:1,
    title: 'Javascript',
    body:'most popular language'
}

function getKeys(obj){
    const result=[]
    for(const key in obj){
        result.push(key)
    }
    return result
}

//without using Object.keys
console.log(getKeys(article)) //['id','title','body']

function getKeys(obj){
    const result=[]
    for(const key in obj){
        result.push(obj[key])
    }
    return result
}

console.log(getKeys(article))//[ 1, 'Javascript', 'most popular language' ]