const city='bangalore'
//any variable declared outside the function, become a global variables
function showCity(){
    console.log(city) 
    console.log(emp)//Reference error: as emp is not declared/defined
}

showCity()

