/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:
输入: s = ""
输出: 0
*/

// ================超时====================傻逼！！！
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;

  let _s = s.split("");
  let str = "",
    len = [];

  let flag = 0;
  while (flag < _s.length) {
    str = "";
    for (let i = flag; i < _s.length; i++) {
      console.log("str==", str, _s[i], i);
      if (str.indexOf(_s[i]) > -1) {
        len.push(str.length);
        str = _s[i];
      } else {
        str = str + _s[i];
        if (i === _s.length - 1) {
          len.push(str.length);
        }
      }
    }

    flag++;
  }
  return Math.max(...len);
};

// 双指针！！！！！  s = "abcabcbb"
var lengthOfLongestSubstring2 = function (s) {
  if (!s) return 0;

  let low = 0;
  let high = 0;
  let max = 0;

  while (high < s.length) {
    let str = s.substring(low, high);
    if (str.indexOf(s[high]) > -1) {
      max = Math.max(high - low, max);
      low++;
    } else {
      high++;
      max = Math.max(high - low, max);
    }
  }
  return max;
};
