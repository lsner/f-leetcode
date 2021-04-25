/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 *
 * 所谓m是n的因子，就是说（n能被m整除） n%m = 0 10能被2整除 10%2 = 0
 *
 * 思路：如果一个数能被2整除，就连续除以2；如果一个数能被3整除，就连续除以3；如果一个数能被5整除，就连续除以5；
 * 如果最后得到的是1，那这个数就是丑数
 */

//1,2,3,5,6,8,9,10

function isUglyNumber(n) {
  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  while (n % 5 === 0) {
    n = n / 5;
  }
  return n === 1;
}

console.log("isUglyNumber", isUglyNumber(14));

function getUglyNumber(index) {
  if (index <= 0) return 0;
  let uglyNumber = 0;
  let count = 0;
  while (count < index) {
    uglyNumber++;
    if (isUglyNumber(uglyNumber)) {
      count++;
    }
  }
  return uglyNumber;
}
console.log("getUglyNumber", getUglyNumber(1000));
