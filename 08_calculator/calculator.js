const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; ++i) {
    product *= arr[i];
  }
  return product;
};

const power = function(base, power) {
  let product = 1;
  for (let i = 0; i < power; ++i) {
    product *= base;
  }
  return product;
};

const factorial = function(num) {
	let product = 1;
  for (let i = num; i > 0; --i) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
