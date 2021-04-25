/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 *
 * 思路：
 * 1、前序遍历的第一个节点为根节点
 * 2、找到中序遍历中根节点的位置，位置左边部分则为左子树[4,7,2]，右边部分即为右子树[5,3,8,6]
 * 3、中序左子树的长度为3 则前序遍历中1后面的三个数即为左子树，剩下部分为右子树
 * 4、以此类推
 */

function NNode(v) {
  this.value = v;
  this.left = null;
  this.right = null;
}

function rebuildTree(pre, mid) {
  if (pre.length == 0) return null;
  let root = new NNode(pre[0]);
  let root_mid_index = mid.indexOf(pre[0]);

  let left_mid_child = mid.slice(0, root_mid_index);
  let left_pre_child = pre.slice(1, 1 + root_mid_index);
  let right_mid_child = mid.slice(root_mid_index + 1);
  let right_pre_child = pre.slice(root_mid_index + 1);

  root.left = rebuildTree(left_pre_child, left_mid_child);
  root.right = rebuildTree(right_pre_child, right_mid_child);
  return root;
}
let a = rebuildTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]);
console.log("aa", a);
