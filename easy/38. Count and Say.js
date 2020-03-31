/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return '1';
    else {
        let initial = '1';
        let res = '';
        for(let i = 1 ; i < n ; i++){
            let runner = 1;
            let count = 1;
            let current = 0;
            while(current < initial.length) {
                if(initial[current] === initial[runner]){
                    count += 1;
                    runner += 1;
                }
                else{
                    res = res + count.toString() + initial[current];
                    current = runner;
                    runner = current + 1;
                    count = 1;
                }
            }
            initial = res;
            res = '';
        }
        return initial.toString();
    }
};
