/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length) {
        let i = 0;
        let len = nums.length;

        while(i < len) {
            if(nums[i] === val) {
                nums[i] = nums[len - 1];
                len -= 1;
            }
            else {
                i += 1;
            }
        }
        return len;
    }
    return 0;
};