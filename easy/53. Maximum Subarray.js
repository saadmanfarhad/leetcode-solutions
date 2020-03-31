/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length > 1) {
        let max = Number.NEGATIVE_INFINITY;

        for(let i = 0 ; i < nums.length - 1 ; i++) {
            let sum = nums[i];
            for(let j = i + 1 ; j < nums.length ; j++) {
                sum += nums[j];
                if(sum > max) max = sum;
            }
            console.log(sum);
        }

        return Math.max(...nums) > max ? Math.max(...nums) : max;
    }
    else if(nums.length) return nums[0];
    else return 0;
};