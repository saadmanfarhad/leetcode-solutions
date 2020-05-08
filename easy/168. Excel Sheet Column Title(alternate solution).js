/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n === 0) return '';
    if(n < 27) return String.fromCharCode(64 + n);
    let s = '';
    while(n > 0) {
        let temp = n % 26;
        let d = Math.floor(n / 26);
        if(temp === 0) {
            temp = 26;
            d = d - 1;
        }
        s = String.fromCharCode(64 + temp) + s;
        n = d;
    }
    return s;
};