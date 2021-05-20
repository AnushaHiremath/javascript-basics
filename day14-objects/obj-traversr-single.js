const user={

}

function prettyPrint(user){
    return `${user.name} - ${user.email} - ${user.address.city}(${user.address.geo.lat},${user.address.geo.lng}) ${user.company.name} ${user.website}`
}

console.log(prettyPrint(user)) //name -email-cityname(lat,lng)-companyName - website