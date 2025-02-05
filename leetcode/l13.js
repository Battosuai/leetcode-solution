/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var total = 0;
  var romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var i = 0;
  while (i < s.length) {
    if (s[i + 1] && romans[s[i]] < romans[s[i + 1]]) {
      total = total + romans[s[i + 1]] - romans[s[i]];
      i += 2;
    } else {
      total += romans[s[i]];
      i++;
    }
  }

  return total;
};

romanToInt("XI");
