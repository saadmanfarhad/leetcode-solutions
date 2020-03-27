/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x < 0 ? false : x === reverse(x);
};

var reverse = function(num) {
    let rev = 0;
    while(num) {
        let rem = num % 10;
        num = Math.floor(num/10);
        let temp = rev * 10 + rem;
        rev = temp;
    }
    return rev;
}