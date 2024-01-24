const sumAll = function(n1, n2) {
    let sum = 0;
    if (n1 < 0 || n2 < 0 || typeof n1 !== 'number' || typeof n2 !== 'number') return 'ERROR';
    if (n1 > n2) {
        n1 += n2;
        n2 = n1 - n2;
        n1 -= n2;
    }
    do {
        sum += n1;
        ++n1;
    } while (n1 <= n2);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
