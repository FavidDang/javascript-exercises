const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, '');

    for (let i = 0; i < str.length; ++i) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
