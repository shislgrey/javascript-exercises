const sumAll = function (a, b) {
    if ((a >= 0) && (b >= 0) && (typeof a === "number") && typeof b === "number") {
        return (Math.abs(b - a) + 1) / 2 * (a + b);
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
