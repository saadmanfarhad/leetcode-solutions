/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;

    for(let i = 0 ; i < prices.length-1 ; i++){
        let buy = prices[i];
        for(let j = i+1; j < prices.length ; j++){
            if(prices[j] - buy > max) max = prices[j] - buy;
        }
    }

    return max;
};