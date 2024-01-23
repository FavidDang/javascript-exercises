const reverseString = function(str) {
    let length = str.length;
    let arr = str.split("");
    let s = '';
    for (let i = 0; i < length; ++i) {
        s += arr[length - i - 1];
    }
    return s;
};

// Do not edit below this line
module.exports = reverseString;
