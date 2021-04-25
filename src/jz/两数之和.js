/**
 * 递增有序数组,输出任意一对即可
 * nums = [2,7,11,15], target = 9
 * 返回[2,7]


[3,2,4] 6 

[3,3] 6
 *  **/

function getSumArr(arr, target) {
  let mMap = new Map();
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    mMap.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    let other = target - arr[i];
    if (mMap.has(other) && mMap.get(other) !== i) {
      res = [arr[i], target - arr[i]];
      break;
    }
  }

  return res;
}

console.log("getSumArr", getSumArr([2, 7, 1, 11, 8, 15], 9));
