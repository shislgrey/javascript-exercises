const repeatString = function (str, reps) {
    let newstr = '';
    if (reps < 0) {
        newstr = 'ERROR';
    } else {
        for (let counter = 0; counter < reps; counter++) {
            newstr = newstr.concat('', str);
        }
    }
    return newstr;
};

// Do not edit below this line
module.exports = repeatString;
