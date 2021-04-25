/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 * 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
 * 
 * 
 * 递归。abc的所有组合值可以分为以下部分：
1. a + 剩余字母组合值；
2. b+ 剩余字母组合值；
3. c+剩余字母组合值；
 */

function getPerputation2(str) {
  if (str.length == 1) {
    return [str];
  }
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let restStr = str.slice(0, i) + str.slice(i + 1);
    let restArr = getPerputation2(restStr);
    console.log("restArr", restArr);
    restArr = restArr.map((x) => str[i] + x);
    res = res.concat(restArr);
  }
  return res;
}

let a = getPerputation2("abc");
console.log(a);
