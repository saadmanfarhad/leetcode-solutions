/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitString = '';

    for(let i = 0 ; i < digits.length ; i++) {
        digitString += digits[i];
    }

    digitString = BigInt(digitString) + BigInt(1);
    digitString = digitString.toString().split('');

    return digitString;
};