const menuItems = [
    {id:1,name:'chilly chicken',isVeg: false},
    {id:2,name:'paneer chilly',isVeg: true},
    {id:3,name:'veg biryani',isVeg: true},
    {id:4,name:'mutton biryani',isVeg: false}

]


function isVeg(menuItems){
    const result = menuItems.filter(function(item){
        return item.isVeg == true
    })
    return result
}

console.log(isVeg(menuItems))  //[{id:2,name:'paneer chilly',isVeg: true},
                                //id:3,name:'veg biryani',isVeg: true}]