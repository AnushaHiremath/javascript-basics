function formatter(str){

    const first =str.slice(0,3)
    const second=str.slice(3,6)
    const third =str.slice(6)
    return `(${first}) ${second} - ${third}`
    return '('+ first + ')' + ' ' + second + '-' + third

    console.log((str.slice(0,3)) + '  ' + str.slice(3,6) +  ' - ' + str.slice(6))

}
//console.log((str.slice(0,3)) + '  ' + str.slice(3,6) +  ' - ' + str.slice(6))
console.log(formatter('1234567890')) //'(123) 456-7890'
console.log(formatter('8989676767')) //'(898) 967-6767'