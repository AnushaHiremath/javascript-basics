const arr1 = [10,20,30]
const arr2 = arr1.slice(0) //[].concat(arr1) -- to add 2 arrays

const arr3 = arr1.map(function(ele){
    return ele
}) //[10,20,30]

console.log(arr1,arr2) //[ 10, 20, 30 ] [ 10, 20, 30 ]

arr1.push(40)
console.log(arr1,arr2) //[ 10, 20, 30, 40 ] [ 10, 20, 30 ]

arr2.push(50)
console.log(arr1,arr2) //[ 10, 20, 30, 40 ] [ 10, 20, 30, 50 ]