/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let result = 0;
  let negative = false;
  if (x < 0) {
    negative = true;
    x *= -1;
  }
  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (result >= Math.pow(2, 31) - 1 || result <= Math.pow(-2, 31)) {
    return 0;
  }

  return negative ? result * -1 : result;
};

console.log(reverse(-321));
console.log(reverse(123));
console.log(reverse(120));
