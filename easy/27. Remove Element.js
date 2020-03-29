/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length) {
        let i = 0;
        while(nums.indexOf(val) !== -1) {
            nums.splice(nums.indexOf(val), 1);
        }
        return nums.length;
    }
    return 0;
};