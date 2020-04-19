/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counter = {};
    for(let i = 0 ; i < nums.length ; i++) {
        if(!counter[nums[i]]){
            counter[nums[i]] = 1;
        }
        else{
            counter[nums[i]]++;
        }

    }

    for(let key in counter) {
        console.log(key, counter[key]);
        if(counter[key] === 1) return key;
    }
};