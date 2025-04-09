"use strict";
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("qovoq"));
console.log(isPalindrome("Hello"));
