/** 
 * 
 * 统计一个数字在排序数组中出现的次数。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0

思路：二分查找 找到第一次出现的位置，最后一次出现的位置，相减则是次数

 * **/

function findLeftNum(nums, low, high, target) {
  if (nums.length === 0) return 0;

  let mid = Math.floor((low + high) / 2);
  if (nums[mid] < target) {
    low = mid + 1;
  } else if (nums[mid] > target) {
    high = mid - 1;
  } else if (nums[mid] === target) {
    if (nums[mid - 1] && nums[mid - 1] !== target) {
      return mid;
    } else {
      high = mid - 1;
    }
  }
  return result.length;
}

const a = findNum([5, 7, 7, 8, 8, 10], 8);
console.log("a", a);
