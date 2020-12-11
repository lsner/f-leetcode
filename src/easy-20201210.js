/* 
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

*/

// 字符串解法
var reverse1 = function(x) {
  console.log("xx", x);
  if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) return 0;
  let flag = x < 0;
  let s = Math.abs(x).toString();
  if (flag) {
    s.substr(1);
  }
  let arr = s.split("");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    result = result + arr[i];
  }

  let a = flag ? -Number(result) : Number(result);
  if (a > Math.pow(2, 31) - 1 || a < -Math.pow(2, 31)) return 0;
  return a;
};

//位数相加
var reverse2 = function(x) {
  let r = Math.abs(x);
  let arr = [];
  let flag = true;
  while (flag) {
    if (r % 10 === r) {
      flag = false;
    }
    arr.push(r % 10);
    r = Math.floor(r / 10);
  }
  let result = 0;
  let length = arr.length;
  arr.map((a, index) => {
    result = result + a * Math.pow(10, length - 1 - index);
  });
  return result;
};
