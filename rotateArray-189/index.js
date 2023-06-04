// function rotateArray(nums, k) {
//   k = k % nums.length;
//   for (let i = 0; i < k; i++) {
//     const data = nums.pop();
//     nums.unshift(data);
//   }
//   return nums;
// }

function rotateArray(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;

  function reverse(nums, start, end) {
    while (start < end) {
      let temporary = nums[start];
      nums[start] = nums[end];
      nums[end] = temporary;
      start++;
      end--;
    }
    return nums;
  }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
