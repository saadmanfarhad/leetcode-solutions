/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let arr = increasingString(s);
    let tmpArr = [];
    let count = 1;

    while(arr[1].length) {
        if(count % 2 === 1) {
            tmpArr = decreasingString(arr[1]);
            console.log('incr', tmpArr);
            arr[0] += tmpArr[0];
            arr[1] = tmpArr[1];
        } else {
            tmpArr = increasingString(arr[1]);
            console.log('decr', tmpArr);
            arr[0] += tmpArr[0];
            arr[1] = tmpArr[1];
        }
        count++;
    }

    return arr[0];
};

var increasingString = function(s) {
    let resString = '';
    let k = 0;
    let leftStr = '';
    s = sortStr(s, false);
    resString += s[0];
    let tStr = s.split('');
    tStr.splice(0,1);
    s = tStr.join('');

    for(let i = 0; i < s.length ; i++) {
        if(resString[k] < s[i]) {
            resString += s[i];
            tStr = s.split('');
            tStr.splice(i,1);
            k++;
        } else {
            leftStr += s[i];
        }
    }

    return [resString, leftStr];
}

var decreasingString = function(s) {
    let resString = '';
    let k = 0;
    let leftStr = '';
    s = sortStr(s, true);
    resString += s[0];
    let tStr = s.split('');
    tStr.splice(0,1);
    s = tStr.join('');

    for(let i = 0; i < s.length ; i++) {
        if(resString[k] > s[i]) {
            resString += s[i];
            tStr = s.split('');
            tStr.splice(i,1);
            k++;
        } else {
            leftStr += s[i];
        }
    }

    return [resString, leftStr];
}

var sortStr = function(s, rev) {
    return rev ? s.split('').sort().reverse().join('') :
        s.split('').sort().join('');
}