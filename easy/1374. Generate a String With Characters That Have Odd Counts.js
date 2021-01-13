/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let resStr = '';
    if(n % 2) {
        for(let i = 0 ; i < n ; i++) {
            resStr += 'a';
        }
    } else {
        for(let i = 0 ; i < n - 1 ; i++) {
            resStr += 'a';
        }

        resStr += 'b';
    }

    return resStr;
};