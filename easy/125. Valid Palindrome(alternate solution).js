/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length){
        let newString = s.match(/[a-zA-Z0-9]+/gi);
        if(!newString) return true;
        newString = newString.join('').toLowerCase();
        return newString === newString.split('').reverse().join('');
    }
    return true;
};