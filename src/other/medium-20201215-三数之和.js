/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

[-4,-1,  -1,0, 1, 2, ]
*/

var mySort = function(a, b) {
  return a - b;
};

var isSame = function(arr1, arr2) {
  return arr1[0] === arr2[0] && arr1[1] === arr2[1];
};

// use循环 => 超出时间限制
var threeSum = function(nums) {
  let _nums = nums.sort(mySort);
  let result = [];
  if (!_nums || _nums[0] > 0 || _nums[_nums.length - 1] < 0) return result;

  let flag_idx = 0;
  while (flag_idx < _nums.length - 1) {
    for (let i = flag_idx + 1; i < _nums.length - 1; i++) {
      let flag = _nums[flag_idx];
      for (let j = i + 1; j < _nums.length; j++) {
        if (flag + _nums[i] + _nums[j] === 0) {
          let stashA = [flag, _nums[i], _nums[j]].sort(mySort);
          if (result.filter(arr => isSame(arr, stashA)).length == 0) {
            result.push(stashA);
          }
        }
      }
    }
    flag_idx++;
  }

  return result;
};

// use 网红解法 双指针
/* 
设 flag 
寻找 a + b = -flag
if(a + b + flag) < 0 左指针右移
if(a + b + flag) > 0 右指针左移

[-4,-1,  -1,0, 1, 2 ] 
[3,-2,1,0] [-2,0,1,3]

*/
var threeSum2 = function(nums) {
  let _nums = nums.sort(mySort);
  let result = [];
  if (!_nums || _nums[0] > 0 || _nums[_nums.length - 1] < 0) return result;

  for (let i = 0; i < _nums.length; i++) {
    // 重复的元素 跳过
    if (_nums[i] === _nums[i - 1]) continue;

    let flag = _nums[i];
    let left = i + 1;
    let right = _nums.length - 1;
    while (left < right) {
      if (flag + _nums[left] + _nums[right] === 0 && left != i && right != i) {
        let stashA = [flag, _nums[left], _nums[right]].sort(mySort);
        if (result.filter(arr => isSame(arr, stashA)).length == 0) {
          result.push(stashA);
        }
      }
      if (flag + _nums[left] + _nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
