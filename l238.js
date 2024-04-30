/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const length = nums.length;

    const leftSuffix = new Array(length);
    const rightSuffix = new Array(length);
    const output = new Array(length);

    leftSuffix[0] = 1;
    rightSuffix[length - 1] = 1;

    for (i = 1; i < length; i++) {
        leftSuffix[i] = nums[i - 1] * leftSuffix[i - 1];
    }

    for (i = length - 2; i >= 0; i--) {
        rightSuffix[i] = nums[i + 1] * rightSuffix[i + 1];
    }

    for (i = 0; i < length; i++) {
        output[i] = leftSuffix[i] * rightSuffix[i];
    }

    return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
