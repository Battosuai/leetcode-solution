var lengthOfLongestSubstring = function (s) {
  var final = "";
  s = s.toLowerCase();
  var temp = "";
  for (var i in s) {
    if (!s[i] !== s[i - 1]) {
      final += s[i];
    } else {
      if (final.length > temp.length) {
        temp = final;
      }
      final = s[i];
    }
  }

  return final.length > temp.length ? final.length : temp.length;
};

lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("aab");
lengthOfLongestSubstring("abcabcabcabcd");
