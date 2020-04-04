/**
 * @param {number} n
 * @return {number}
 */

 //Memoization Solution
var climbStairs = function(n) {
    let memo = {};
    let count = climb_stairs(0, n, memo);
    return count;
};

const climb_stairs = function(start, final, memo) {
    if(start > final){
        return 0;
    }
    if(start === final){
        return 1;
    }
    if(memo[start]){
        return memo[start]
    }

    memo[start] = climb_stairs(start+1, final, memo) + climb_stairs(start+2, final, memo);
    return memo[start];
}