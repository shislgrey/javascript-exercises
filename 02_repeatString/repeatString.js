const repeatString = function (str, reps) {
    // let newstr = '';
    // if (reps < 0) {
    //     newstr = 'ERROR';
    // } else {
    //     newstr = str.repeat(reps);
    // }
    // return newstr;

// Alternative solutions:
// Short, program flow still obvious through if-else
    // if (reps < 0) { return 'ERROR'; }
    // else { return str.repeat(reps); }

// Inverted from previous
    // if (reps >= 0) { return str.repeat(reps); }
    // else { return 'ERROR' }

// Shorter, but harder to read
    // if (reps < 0) return 'ERROR';
    // return str.repeat(reps);

// shortest
    return reps < 0 ? 'ERROR' : str.repeat(reps)
    //     ( cond ) ? (true)  : ( false )
};

// Do not edit below this line
module.exports = repeatString;
