const sumAll = function (start, end) {
    return [...Array(end + 1)].reduce((total, index) => {
        return total + index;
    }, start);
};

a = sumAll(10, 5);

// Do not edit below this line
module.exports = sumAll;
