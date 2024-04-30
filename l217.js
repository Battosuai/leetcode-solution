/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  try {
    var testArray = [];
    nums.forEach((num) => {
      if (!testArray.includes(num)) {
        testArray.push(num);
      } else {
        throw new Error("duplicate");
      }
    });
    return false;
  } catch (error) {
    return true;
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));
