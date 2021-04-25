/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 * 格式：Node:{
 *         value:xx,
 *         next:Node
 *      }
 */
function printList(root) {
  let arr = [];
  let cur = root;
  while (cur) {
    arr.unshift(cur.value);
    cur = cur.next;
  }
  return arr;
}
