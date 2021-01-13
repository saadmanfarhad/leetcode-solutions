/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let resStr= '';
    for(let i = 0 ; i < str.length ; i++) {
        if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            resStr += String.fromCharCode(32 + str[i].charCodeAt(0));
        } else {
            resStr += str[i];
        }
    }
    return resStr;
};