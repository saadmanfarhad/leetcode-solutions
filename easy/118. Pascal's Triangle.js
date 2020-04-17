/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let finalArray = [];

    for(let i = 0 ; i < numRows ; i++) {
        let cArray = new Array(i + 1);
        cArray[0] = 1;
        cArray[i] = 1;
        finalArray.push(cArray);
        if(i > 0) {
            for(let j = 1; j < i ; j ++) {
                cArray[j] = finalArray[i-1][j-1] + finalArray[i-1][j];
            }
        }
    }

    return finalArray;
};