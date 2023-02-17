const leapYears = function (year) {
    // if (year % 4 == 0) {
    //     if (year % 100 == 0 && year % 400 != 0) { return false; }
    //     return true;
    // } else { return false }

    // Slightly cleaner, using a guard clause style
    // https://blog.webdevsimplified.com/2020-01/guard-clauses/
    // if (year % 100 == 0 && year % 400 != 0) { return false; }
    // if (year % 4 == 0) { return true; }
    // return false;

    // Pretty compact - don't be shy about "cheating" with builtins
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    // This can be optimized
    // if (new Date(year, 1, 29).getDate() === 29) { return true; }
    // return false;

    // Most compact, single condition means we can get false/true directly
    return (new Date(year, 1, 29).getDate() === 29)
};

// Do not edit below this line
module.exports = leapYears;
