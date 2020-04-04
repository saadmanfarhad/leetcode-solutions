/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let num1 = a.padStart(b.length,'0');
    let num2 = b.padStart(a.length,'0');
    let res = '';
    let carry = 0;

    for(let i = num1.length -1 ; i >= 0 ; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        if(sum === 0) {
            res = '0' + res;
            carry = 0;
        }
        else if(sum === 1) {
            res = '1' + res;
            carry = 0;
        }
        else if(sum === 2) {
            res = '0' + res;
            carry = 1;
        }
        else {
            res = '1' + res;
            carry = 1;
        }
    }

    return carry ? '1'+res : res;
};