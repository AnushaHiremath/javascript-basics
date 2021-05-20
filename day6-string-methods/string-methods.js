const str='javascript'

console.log(str.length) //10
console.log(str.toUpperCase()) //'JAVASCRIPT'
console.log(str.toLowerCase()) //'javascript'
console.log(str.indexOf('a')) // 1
console.log(str.indexOf('z')) //-1
console.log(str.includes('a')) // true
console.log(str.includes('z')) // false

console.log(str.indexOf('a')>=0) // true
console.log(str.lastIndexOf('a')) //3
console.log(str[1])      //'a'
console.log(str.charAt(1)) //'a'

console.log(str.search('t')) //9

const name='sachin'
console.log(name.slice(0,4)) //'sach'
console.log(name)

console.log(name.slice(1)) //'achin'

//capitalize a word
//name.toCaptalize() //'Sachin'

console.log(name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()) //'Sachin'


//split
const tech = 'javascript react node express'
console.log(tech.split(' '))

const students = 'arjun-mahi-mahesh'
console.log(students.split(' '))

const emails = '1@gmail.com, 2@gmail.com, 3@gmail.com'
console.log(emails.split(', '))

