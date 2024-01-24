const removeFromArray = function(arr, ...nums) {
    let len = nums.length;
    for (let i = 0; i < len; ++i) {
        arr = arr.filter((element) => element !== nums[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
