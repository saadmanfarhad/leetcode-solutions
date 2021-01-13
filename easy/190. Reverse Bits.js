/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if (n === 0) return n;
    let revString = toBin(n).split('').reverse().join('').padEnd(32, '0');
    return parseInt(revString, 2);
};

const toBin = function(b) {
    if(b) {
        return (b >>> 0).toString(2);
    }
    return b;
}
