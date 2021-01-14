/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    const result = [];

    for (let i = 0 ; i < candies.length ; i++) {
        if(candies[i] + extraCandies < max) result.push(false);
        else result.push(true);
    }

    return result;
};