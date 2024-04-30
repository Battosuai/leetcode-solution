/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const output = [];
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const strSorted = strs[i].split("").sort().join("");
    if (map[strSorted] !== undefined) {
      output[map[strSorted]].push(strs[i]);
    } else {
      output.push([strs[i]]);
      map[strSorted] = output.length - 1;
    }
  }

  return output;
};

console.log(
  "Answer",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
