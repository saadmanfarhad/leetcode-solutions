/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const regex = /\./gi;
    return address.replace(regex, '[.]');
};