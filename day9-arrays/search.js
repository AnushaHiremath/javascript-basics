const menuItems = [
    {id:1,name:'chilly chicken',isVeg: false},
    {id:2,name:'paneer chilly',isVeg: true},
    {id:3,name:'veg biryani',isVeg: true},
    {id:4,name:'mutton biryani',isVeg: false}

]


function search(menuItems,term){
    const result = menuItems.filter(function(item){
        return item.name.includes(term)
    })
    if(result.length == 0){
        return `We could't find any items matching your search.Please try a new keyword.`
    }
    else{
        return result   // filter returns an array
    }
}

console.log(search(menuItems,'biscuit')) // We could't find any items matching your search.Please try a new keyword.
console.log(search(menuItems,'ani'))


// [
//     { id: 3, name: 'veg biryani', isVeg: true },
//     { id: 4, name: 'mutton biryani', isVeg: false }
//   ]

