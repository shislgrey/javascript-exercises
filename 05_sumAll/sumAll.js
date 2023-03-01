const sumAll = function (a, b) {
    if ((a >= 0) && (b >= 0) && (typeof a === "number") && typeof b === "number") {
        // let sum = 0;
        // if (a < b) {
        //     for (i = a; i <= b; i++) {
        //         sum += i;
        //     }
        // } else {
        //     for (i = b; i <= a; i++) {
        //         sum += i;
        //     }
        // }
        // return sum;

        // FIXME: make this work with larger number first
        return (b / 2) * (a + b) 
    }
    return "ERROR";
    // for i = a, i <= b, i++
    // return i.reduce((i, i+1) => (i + (i+1), 0))
};

// Do not edit below this line
module.exports = sumAll;
