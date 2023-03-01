const fibonacci = function (num) {
    num = parseInt(num);
    let fib = [0, 1];
    if (num <= 0) {
        return "OOPS";
    }
    else if (num >= fib.length) {
        for (let i = fib.length; i <= num; i++)
            fib.push((fib.at(-1)) + (fib.at(-2)));
    }
    return fib[num];
};
fibonacci("2")
// Do not edit below this line
module.exports = fibonacci;
