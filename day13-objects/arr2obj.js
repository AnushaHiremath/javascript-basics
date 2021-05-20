const arr=[
    ['id',1],
    ['title','Javascript'],
    ['body','most popular']
]

function arr2obj(arr){
    const result={}
    arr.forEach(function(ele){
        result[ele[0]]=ele[1]
    })
    return result
}

console.log(arr2obj(arr)) //{ id: 1, title: 'Javascript', body: 'most popular' }