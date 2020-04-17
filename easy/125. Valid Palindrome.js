/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length){
        let newString = s.match(/[a-zA-Z0-9]+/gi);
        console.log(newString);
        if(!newString) return true;
        newString = newString.join('').toLowerCase();
        let j = newString.length - 1;
        for(let i = 0 ; i <= Math.floor((newString.length)/2) ; i++) {
            if(newString[i] !== newString[j--]) return false;
        }
        return true;
    }
    return true;
};