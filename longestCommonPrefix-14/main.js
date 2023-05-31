/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const characters = strs[0][i];
    for (j = 0; j < strs.length; j++) {
      if (strs[j][i] !== characters) return prefix;
    }
    prefix = prefix + characters;
  }
  return prefix;
};

console.log("answer", longestCommonPrefix(["flower", "flow", "flight"]));
