function filterActiveUsers(users){
    if(!Array.isArray(users) || users.length===0){
        return "Invalid"
    }

    if(!users.every(user=>user && typeof user=== "object" && typeof user.name=== "string" && typeof user.isActive=== "boolean")){
        return "Invalid"
    }
   
    
let activeUsers=users.filter(user=>user.isActive===true);

return activeUsers;

}
console.log(filterActiveUsers([{"name":"A"}]
))