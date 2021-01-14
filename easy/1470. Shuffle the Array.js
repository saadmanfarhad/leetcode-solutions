/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const result = [];
  for (let i = 0, j = n; i < n, j < nums.length; i++, j++) {
    result.push(nums[i], nums[j]);
  }

  return result;
};
