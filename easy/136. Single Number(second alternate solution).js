/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b) => b - a);
    for(let i = 0 ; i < nums.length ; i++) {
        if(i == 0 && nums[i] !== nums[i+1]) return nums[i];
        if(i == nums.length - 1 && nums[i] !== nums[i-1]) return nums[i];
        if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) return nums[i];
    }
};