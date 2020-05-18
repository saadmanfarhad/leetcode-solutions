/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zeroes = 0;

    for(let i = 5 ; i <= n ; i*=5) {
        zeroes += Math.floor(n/i);
    }

    return zeroes;
};