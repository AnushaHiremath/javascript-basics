const article ={
    id: 1,
    name: 'javascript',
    body: 'Javascript is the most popular language in 2020'
}

console.log(article.name) //javascript
console.log(article['name']) //javascript

const prop = 'name'
console.log(article.prop) //undefined
console.log(article[prop]) //javascript //article['name']

for(const key in article){
    console.log(key, article[prop])
}

// id javascript
// name javascript
// body javascript


