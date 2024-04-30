/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const missingNumbers = [];
    const length = nums.length;
    const minNumber = Math.min(...nums);
    for (let i = minNumber; i <= length; i++) {
        if (nums.indexOf(i) < 0) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
};

console.log(missingNumber([1, 0, 3]));
