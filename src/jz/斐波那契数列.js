/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 * F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）
 *
 * 思路：常用的递归解法，会有重复计算的问题
 * 比如 f(10) => f(9) f(8)
 *      f(9) => f(8) f(7)
 *      f(8) => f(7) f(6)
 * 所以考虑把计算过的值缓存起来,而且最好是从小往大去计算，这样也不会重复
 */

function getN(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return getN(n - 1) + getN(n - 2);
}
// let a = getN(6);
function getN2(n) {
  let cache = [0, 1];

  let fn = function (n) {
    if (n < 0) {
      return -1;
    }
    if (n < cache.length) {
      return cache[n];
    }
    for (let i = cache.length; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
  };

  return fn(n);
}
