/** 
 * 
 * 
 * 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

示例:

输入: a = 1, b = 1
输出: 2

 * 
 * **/

var add = function (a, b) {
  let sum = 0;
  while (b != 0) {
    sum = a ^ b;
    jin = (a & b) >> 1;
    a = sum;
    b = jin;
  }
  return a;
};

console.log("aa", add(1, 2));

// 递归实现
function Add(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return Add(num1 ^ num2, (num1 & num2) << 1);
}
