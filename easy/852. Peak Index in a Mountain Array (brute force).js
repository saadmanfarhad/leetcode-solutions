/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let max = -1;
    let idx = -1;

    for (let i = 0 ; i < arr.length ; i++) {
        if (max < arr[i]) {
            max = arr[i];
            idx = i;
        }
    }

    return idx;
};