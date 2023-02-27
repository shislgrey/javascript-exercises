const palindromes = function (string) {
    let pal = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let ind;
    let rome;
    if (pal.length % 2 != 1) {
        ind = pal.slice(pal.length / 2);
        rome = pal.slice(0, pal.length / 2).split('').reverse().join('');
    } else {
        ind = pal.slice(Math.round(pal.length / 2));
        rome = pal.slice(0, Math.round(pal.length / 2)).split('').reverse().join('');
    }
};

// Do not edit below this line
module.exports = palindromes;
