const maxSubArray = (nums) => {
  let max_so_far = Number.MIN_VALUE;
  let max_ending = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending = max_ending + nums[i];
    if (max_so_far < max_ending) max_so_far = max_ending;
    if (max_ending < 0) max_ending = 0;
  }
  return max_so_far;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
