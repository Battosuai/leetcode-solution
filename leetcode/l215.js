// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// This fails in time complexity requirement of leetcode

// var findKthLargest = function (nums, k) {
//     let iterationCount = 0;
//     let largest = -Infinity;
//     let largestIndex = -1;
//     while (iterationCount < k) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] > largest) {
//                 largest = nums[i];
//                 largestIndex = i;
//             }
//         }
//         iterationCount++;
//         if (iterationCount === k) {
//             return largest;
//         } else {
//             nums.splice(largestIndex, 1);
//             largest = -Infinity;
//             largestIndex = -1;
//         }
//     }
// };

var findKthLargest = function (nums, k) {
    let heap = new MaxHeap();
    for (let i = 0; i < nums.length; i++) {
        heap.insert(nums[i]);
    }
    let result = -1;
    for (let i = 0; i < k; i++) {
        result = heap.extractMax();
    }
    return result;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (parent >= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;
        let length = this.heap.length;

        if (left < length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [
                this.heap[index],
                this.heap[largest],
            ];
            this.sinkDown(largest);
        }
    }

    extractMax() {
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return max;
    }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
