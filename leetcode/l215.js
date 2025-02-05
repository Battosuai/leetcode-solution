// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let iterationCount = 0;
    let largest = -Infinity;
    let largestIndex = -1;
    while (iterationCount < k) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > largest) {
                largest = nums[i];
                largestIndex = i;
            }
        }
        iterationCount++;
        if (iterationCount === k) {
            return largest;
        } else {
            nums.splice(largestIndex, 1);
            largest = -Infinity;
            largestIndex = -1;
        }
    }
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
