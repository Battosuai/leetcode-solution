const firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let flag = false;
    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        continue;
      }
      if (s[i] === s[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
