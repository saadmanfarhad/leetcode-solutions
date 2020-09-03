/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const count = {};

    for(let i = 0 ; i < nums.length ; i++) {
        if(count[nums[i]]) {
            return nums[i];
        } else {
            count[nums[i]] = 1;
        }
    }

    return;
};