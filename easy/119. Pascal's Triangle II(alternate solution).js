/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    else {
        let prevArray = [1];
        for(let i = 1 ; i <= rowIndex ; i++) {
            let cArray = new Array(prevArray.length + 1);
            cArray[0] = 1;
            cArray[prevArray.length] = 1;
            for(let j = 1 ; j < prevArray.length ; j++) {
                cArray[j] = prevArray[j-1] + prevArray[j];
            }
            prevArray = cArray;
        }
        return prevArray;
    }
};