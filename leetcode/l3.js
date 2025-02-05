const lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let maxLength = 0;
  const uniqueCharacters = new Set();
  while (end < s.length) {
    if (!uniqueCharacters.has(s[end])) {
      uniqueCharacters.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueCharacters.size);
    } else {
      uniqueCharacters.delete(s[start]);
      start++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("abcabcabcabcd"));
