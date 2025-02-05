/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let firstIndex = -1;
    let lastIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (firstIndex === -1) {
                firstIndex = i;
            }
            lastIndex = i;
        }
    }
    return [firstIndex, lastIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]
