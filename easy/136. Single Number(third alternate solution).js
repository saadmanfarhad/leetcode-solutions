/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let initial = 0;

    for(let i = 0 ; i < nums.length ; i++) {
        initial = initial ^ nums[i];
    }

    return initial;
};