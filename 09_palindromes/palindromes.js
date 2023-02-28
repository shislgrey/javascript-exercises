const palindromes = function (string) {
    let cleanString = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let firstHalf;
    let secondHalf;
    if (cleanString.length % 2 == 0) {
        firstHalf = cleanString.slice(cleanString.length / 2);
        secondHalf = cleanString.slice(0, cleanString.length / 2).split('').reverse().join('');
    } else if (cleanString.length % 2 == 1) {
        firstHalf = cleanString.slice(Math.round(cleanString.length / 2));
        secondHalf = cleanString.slice(0, Math.round(cleanString.length / 2) - 1).split('').reverse().join('');
    }
    if (firstHalf == secondHalf) { return true } else { return false }
};

// Do not edit below this line
module.exports = palindromes;
