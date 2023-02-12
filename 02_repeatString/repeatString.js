const repeatString = function (str, reps) {
    let newstr = '';
    if (reps < 0) {
        newstr = 'ERROR';
    } else {
        newstr = str.repeat(reps);
    }
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
