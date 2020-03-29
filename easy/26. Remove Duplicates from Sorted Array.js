/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length) {
        let i = 0;
        for(let j = 1 ; j < nums.length ; j++) {
            if(nums[i] !== nums[j]) {
                nums[i+1] = nums[j];
                i += 1;
            }
        }
        return i+1;
    }
    return 0;
};