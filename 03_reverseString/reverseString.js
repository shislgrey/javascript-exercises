const reverseString = function (str) {
    stepOne = str.split('');
    stepTwo = stepOne.reverse();
    stepThree = stepTwo.join('');
    return stepThree;
};

// Do not edit below this line
module.exports = reverseString;
