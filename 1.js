"use strict";
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord("The quick brown fox jumps"));
