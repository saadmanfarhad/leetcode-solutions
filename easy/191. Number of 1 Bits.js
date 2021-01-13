/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const bin = toBin(n).padStart(32, '0');
    let count = 0;
    for(let i = 0 ; i < bin.length ; i++) {
        if(bin[i] === '1')count++;
    }
    return count;
};

const toBin = function (b) {
    return (b >>> 0).toString(2);
}