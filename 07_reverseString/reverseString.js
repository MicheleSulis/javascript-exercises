const reverseString = function (start) {
    let trats = "";
    for (let i = start.length - 1; i >= 0; i--)
        trats += start[i];
    return trats;
};

// Do not edit below this line
module.exports = reverseString;
