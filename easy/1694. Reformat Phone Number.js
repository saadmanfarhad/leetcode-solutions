/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const res = [];
    number = number.replace(/[\s-]+/g, '');
    if(number.length % 3 === 0) {
        const loopCount = number.length / 3;
        let s = 0, e = 3;
        for(let i = 0 ; i < loopCount ; i++) {
            const str = number.slice(s, e);
            res.push(str);
            s += 3;
            e += 3;
        }
    } else if (number.length % 3 === 1) {
        const loopCount = Math.floor((number.length / 3) - 1);
        let s = 0, e = 3;
        for(let i = 0 ; i < loopCount ; i++) {
            const str = number.slice(s, e);
            res.push(str);
            s += 3;
            e += 3;
        }

        s = 3 * loopCount;
        e = (3 * loopCount) + 2;
        for(let i = 0 ; i < 2 ; i++) {
            const str = number.slice(s, e);
            res.push(str);
            s += 2;
            e += 2;
        }
    } else {
        const loopCount = Math.floor(number.length / 3);
        let s = 0, e = 3;
        for(let i = 0 ; i < loopCount ; i++) {
            const str = number.slice(s, e);
            res.push(str);
            s += 3;
            e += 3;
        }
        res.push(number.slice(3 * loopCount, (3 * loopCount) + 2));
    }

    return res.join('-');
};