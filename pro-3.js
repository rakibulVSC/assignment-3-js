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
console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))