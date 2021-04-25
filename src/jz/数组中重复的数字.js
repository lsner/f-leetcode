/**
 * 在长度为n的数组里，每个元素的值在0-n-1之间
 * eg:[2,3,1,0,2,5,3] => [2,3]
 *
 * 思路：先把数组排序, 然后从排序的数组里找
 *
 * **/

function getRepeatNumber(arr) {
  let _arr = arr.slice();
  _arr.sort();
  let mapObj = {};
  for (let i = 0; i < _arr.length; i++) {
    let currV = arr[i];
    if (mapObj[currV]) {
      mapObj[currV] = mapObj[currV] + 1;
    } else {
      mapObj[currV] = 1;
    }
  }
  return Object.keys(mapObj).filter((item) => mapObj[item] > 1);
}

console.log(getRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
