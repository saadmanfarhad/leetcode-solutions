/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let letterCount = 0;

    for(let i = 0 ; i < s.length ; i++) {
        if(s[i] === 'R') letterCount++;
        if(s[i] === 'L') letterCount--;
        if(letterCount === 0) count++;
    }

    return count;
};