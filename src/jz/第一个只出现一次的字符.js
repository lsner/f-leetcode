/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 *
 * 思路：
 *
 */

function firstShow(str) {
  let cache = {};
  let res = "";
  for (let i = 0, length = str.length; i < length; i++) {
    if (cache[str[i]]) {
      cache[str[i]] += 1;
    } else {
      cache[str[i]] = 1;
    }
  }
  let arr = Object.keys(cache);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      res = i;
      break;
    }
  }
  return res ? str.indexOf(res) : -1;
}
