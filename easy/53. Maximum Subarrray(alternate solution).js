/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let currentSum = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < nums.length ; i++) {
        currentSum = Math.max(0, currentSum);
        currentSum += nums[i];
        max = Math.max(max, currentSum);
    }
    return max;
};