/**
 * @param {number[]} prices
 * @return {number}
 */

 //Valley and Peak Approach
var maxProfit = function(prices) {
    let maxProfit = 0;
    let valley = prices[0];
    let peak = prices[0];
    let index = 0;

    while(index < prices.length - 1) {
        while(index < prices.length - 1 && prices[index] >= prices[index + 1]) {
            index++;
        }
        valley = prices[index];

        while(index < prices.length - 1 && prices[index] <= prices[index + 1]) {
            index++;
        }
        peak = prices[index];

        maxProfit += peak - valley;
    }

    return maxProfit;
};