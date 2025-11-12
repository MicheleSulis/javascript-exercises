const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0)
        return "ERROR";

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    end = end - start;
    
    return [...Array(end + 1).keys()].map((x) => x + start)
        .reduce((total, index) => {
            return total + index;
        }, 0);
};

// Do not edit below this line
module.exports = sumAll;