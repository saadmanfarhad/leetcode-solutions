/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let l = 0, r = s.length - 1;
    let lCount = 0, rCount = 0;

    while(l < r) {
        if(vowels.includes(s[l])) lCount++;
        if(vowels.includes(s[r])) rCount++;

        l++;
        r--;
    }

    return lCount === rCount;
};