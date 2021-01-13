/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let result = {};
    for (let i = 0 ; i < emails.length ; i++) {
        const domain = emails[i].split('@')[1];
        const localName = emails[i].split('@')[0];
        const conciseLocalName = localName.split('+')[0].replace(/[.]+/g, '');
        const email = conciseLocalName + '@' + domain;

        if (result[email]) result[email]++;
        else {
            result[email] = 1;
        }
    }

    return Object.keys(result).length;
};