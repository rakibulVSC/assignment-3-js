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
console.log(bonusScore([90, 75, 100, 85]))