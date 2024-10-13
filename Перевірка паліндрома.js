function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    } else if (string[0] !== string[string.length - 1]) {
        return false;
    } else{
        return isPalindrome(string.slice(1, -1)); 
    }   
}

console.log (isPalindrome('racecar'));
console.log (isPalindrome('hello'));
console.log (isPalindrome('madam'));
console.log (isPalindrome(''));
console.log (isPalindrome('a'));