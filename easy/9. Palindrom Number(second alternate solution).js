/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let len = x.toString().length -1;
    let xStr = x.toString();
    for(let i = 0 ; i <  Math.floor(x.toString().length/2) ; i++) {
        if(xStr[i] !== xStr[len--]) {
            return false;
        }
    }
    return true;
};