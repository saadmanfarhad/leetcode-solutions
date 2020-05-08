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
        temp = temp === 0 ? 26 : temp;
        s = String.fromCharCode(64 + temp) + s;
        n = n - temp;
        n = n / 26;
    }
    return s;
};