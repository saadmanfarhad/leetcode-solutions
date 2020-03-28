/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';

    if(strs.length) {
        let minLength = Number.MAX_SAFE_INTEGER;
        for(let i = 0 ; i < strs.length ; i++) {
            if(minLength > strs[i].length) minLength = strs[i].length;
        }


        let prefixString = '';
        for(let i = 0 ; i < minLength ; i++) {
            for(let j = 0 ; j < strs.length ; j++) {
                prefixString += strs[j][i];
            }
        }

        for(let i = 0 ; i < prefixString.length ; i += strs.length) {
            let flag = 1;
            for(let j = 1 ; j < strs.length ; j++) {
                if(prefixString[i] !== prefixString[i+j]){
                    if(i === 0) {
                        return '';
                    }
                    flag = 0;
                }
            }
            if(flag) {
                result += prefixString[i];
            }
        }

    }

    return result;
};