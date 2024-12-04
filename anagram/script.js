let first_word ='Mary';
let secund_word ='Army';

function isAnagram(first,secund){
    let a = first.toLowerCase().split("").sort().join("")
    let b =secund.toLowerCase().split("").sort().join("")
    console.log(a,b);
    return a ===b
    
}
isAnagram(first_word,secund_word)
console.log(isAnagram(first_word,secund_word)
);
