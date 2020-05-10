/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {};
    let max = -1;
    let maxNum = null;

    for(let i = 0 ; i < nums.length ; i++) {
        if(freq[nums[i]]){
            freq[nums[i]]++;
        } else {
            freq[nums[i]] = 1;
        }
        if(max < freq[nums[i]]){
            max = freq[nums[i]];
            maxNum = nums[i];
        }
    }

    return maxNum;
};