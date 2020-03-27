/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const len = x.toString().length;
    const xString = x.toString();
    let resString = "";
    for(let i = len - 1 ; i >= 0 ; i--){
        resString += xString[i];
    }
    if (parseInt(resString) > Math.pow(2,31) - 1) {
        return 0;
    }
    return x > 0 ? parseInt(resString) : parseInt(resString) * -1;
};