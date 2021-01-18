/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const getCount = (n) => {
        let sum = 0;
        for (let i = n - 1 ; i > 0 ; i--) {
            sum += i;
        }
        return sum;
    }

    const numList = {};
    const mem = {};

    for (let i = 0 ; i < nums.length ; i++) {
        if(numList[nums[i]]) {
            numList[nums[i]] = numList[nums[i]] + 1;
        }
        else numList[nums[i]] = 1;
    }

    let result = 0;
    Object.keys(numList).forEach(key => {
        if (mem[key]) result += mem[key];
        else {
            if (numList[key] > 1) {
                const count = getCount(numList[key]);
                mem[key] = count;
                result += count;
            }
        }
    })

    return result;
};