/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    var count1 = {};
    var count2 = {};
    for (i = 97; i <= 122; i++) {
        count1[i] = 0;
        count2[i] = 0;
    }
    for (i = 0; i < s.length; i++) {
        count1[s.charCodeAt(i)]++;
        count2[t.charCodeAt(i)]++;
    }

    for (key in count1) {
        if (count1[key] !== count2[key]) {
            return false;
        }
    }

    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function (s, t) {
    if (s.length !== t.length) return false;
    if (s.split('').sort().join('') === t.split('').sort().join(''))
        return true;
    return false;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

console.log(isAnagram1('anagram', 'nagaram'));
console.log(isAnagram1('rat', 'car'));
