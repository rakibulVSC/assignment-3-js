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

//problem-2
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

//problem-3
function countHashtags(caption) {
    if(typeof caption !== "string"){
        return "Invalid"
    }
    let words=caption.split(" ");
    let hashtagCount=0;
    let longestTag="";
    
    for(let word of words){
        if(word.startsWith("#")){
            hashtagCount++;
            let tag=word.slice(1);
            if(tag.length>longestTag.length){
                longestTag=tag;
            }
        }
    }
    return {hashtagCount:hashtagCount,longestTag:longestTag}
}

//problem-4
function bonusScore(scores) {
   if(!Array.isArray(scores)){
    return "Invalid"
   }
   if(scores.length===0){
    return "Invalid"
   }
   if(!scores.every(score=>typeof score === "number")){
    return "Invalid"
   }
   let updatedScore=scores.map(score=>score+10)
      let sum=0;
   for(let score of updatedScore){
    sum+=score;
   }
   return sum;
}


// problem-5
function generateLeaderboard(students) {
    if (!Array.isArray (students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
 if (!students.every(student =>
        student &&
        typeof student.name === "string" &&
        typeof student.score === "number"
    )) {
        return "Invalid";
    }
    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
       return name.toUpperCase();
    });

    return names;
}