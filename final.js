function studentIntroduction(student) {
    if (Array.isArray(student)) {
        student = student.reduce((acc, curr) => {
            return { ...acc, ...curr };
        }, {});
    }

    if (typeof student !== "object" || student === null) {
        return "Invalid";
    }
    if (!student.name || !student.age || !student.course) {
        return 'Invalid';
    }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}


function filterActiveUsers(users){
    if(!Array.isArray(users) || users.length===0){
        return "Invalid"
    }
   
    
let activeUsers=users.filter(user=>user.isActive===true);

return activeUsers;

}

