const fibonacci = function(n) {
    if (typeof n !== 'number') {
        n = parseInt(n);
    }

    if (n === 0) {
        return 0;
    }

    if (n < 0) {
        return "OOPS";
    }

    let n1 = 1;
    let n2 = 1;
    if (n === 1 || n === 2) {
        return n1;
    }

    let i = 2;
    while (n !== i) {
        n2 += n1;
        n1 = n2 - n1;
        ++i;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
