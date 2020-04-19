/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    let sumOfNums = 0;
    let sumOfUniqNum = 0;

    for(let i = 0 ; i < nums.length ; i++) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1
            sumOfUniqNum += nums[i]
        }
        sumOfNums += nums[i];
    }

    return 2 * (sumOfUniqNum) - sumOfNums;
};