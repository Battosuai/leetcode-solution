function moveZeroes(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
