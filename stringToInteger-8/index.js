const myAtoi = function (s) {
  var sign = 1,
    base = 0,
    i = 0;

  while (s[i] == " ") {
    i++;
  }

  if (s[i] == "-" || s[i] == "+") {
    sign = 1 - 2 * (s[i++] == "-");
  }

  while (s[i] >= "0" && s[i] <= "9") {
    if (
      base > Number.MAX_VALUE / 10 ||
      (base == Number.MAX_VALUE / 10 && str[i] - "0" > 7)
    ) {
      if (sign == 1) return Number.MAX_VALUE;
      else return Number.MAX_VALUE;
    }
    base = 10 * base + (s[i++] - "0");
  }
  return base * sign;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
