const getTheTitles = function (books) {
    //TODO: use Array's .map method, and do not explicitly create an intermediate array. Return the result directly
    let bookNames = [];
    books.forEach(book => bookNames.push(book.title));
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
