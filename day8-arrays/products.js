const products =[
    {id:1,name:'marker',price: 15},
    {id:2,name:'scale',price: 10},
    {id:3,name:'board',price: 150}
]

console.log(typeof products) //'object' 
//for loop
// console.log('Listing Products',products.length)
// for(let i=0;i<products.length;i++){
//     console.log(`${products[i].id}.${products[i].name}.${products[i].price}`)
// }

//forEach
console.log('Listing products',products.length)     
products.forEach(function(prod){
    console.log(`${prod.id}.${prod.name}.${prod.price}`)
})
//Listing products 3
// 1.marker.15
// 2.scale.10
// 3.board.150
