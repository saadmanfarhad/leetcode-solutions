/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const sArray = s.split('');
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if(vowels.includes(sArray[l]) && vowels.includes(sArray[r])) {
            let tmp = sArray[l];
            sArray[l] = sArray[r];
            sArray[r] = tmp;
            l++;
            r--;
        } else {
            if(vowels.includes(sArray[l])) {
                r--;
            } else if(vowels.includes(sArray[r])) {
                l++;
            } else {
                l++;
                r--;
            }
        }
    }

    return sArray.join('');
};