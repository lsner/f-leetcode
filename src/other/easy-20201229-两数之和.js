/* 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

[]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 使用双重for循环的都是垃圾！！！！
  if (!nums) return [];
  if (!nums.length) return [];

  let result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (result.length) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
  }

  return result;
};

var twoSum2 = function(nums, target) {
  if (!nums) return [];
  if (!nums.length) return [];

  let result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let right = target - nums[i];
    let right_idx = nums.lastIndexOf(right);
    //如果这个数存在，且索引不是本身
    if (right_idx > -1 && right_idx != i) {
      result = [i, right_idx];
      break;
    }
  }
  return result;
};
// let r = twoSum([2, 7, 11, 15], 9);
let r = twoSum([3, 2, 4], 6);
// let r = twoSum([3, 3], 6);
console.log("====r", r);
