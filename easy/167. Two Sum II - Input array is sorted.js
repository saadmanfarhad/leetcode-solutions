/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let idxMap = {};
    idxMap[numbers[0]] = 0;
    for (let i = 1 ; i < numbers.length ; i++) {
        const diff = target - numbers[i];
        if(idxMap[diff] !== undefined) {
            return [idxMap[diff]+1, i+1];
        }
        idxMap[numbers[i]] = i;
    }

    return [];
};