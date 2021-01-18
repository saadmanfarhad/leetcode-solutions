/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const numList = new Map();
    let count = 0;

    for (let i = 0 ; i < nums.length ; i++) {
        if (numList.has(nums[i])) {
            count += numList.get(nums[i]);
            numList.set(nums[i], numList.get(nums[i]) + 1);
        } else {
            numList.set(nums[i], 1);
        }
    }

    return count;
};