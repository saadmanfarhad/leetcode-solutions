/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0;
    for (let i = 0 ; i < words.length ; i++) {
        let flag = 1;
        for (let j = 0 ; j < words[i].length ; j++) {
            if(allowed.includes(words[i][j]) == false) {
                flag= 0;
                break;
            }
        }
        if(flag) result++;
    }

    return result;
};