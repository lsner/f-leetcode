/* 
给定一个二叉树的根节点 root ，返回它的 中序 遍历。
示例 1：
输入：root = [1,null,2,3]    [1,null,2,3,4,5,6]
输出：[1,3,2]

示例 2：
输入：root = []
输出：[]

示例 3：
输入：root = [1]
输出：[1]

示例 4：
输入：root = [1,2]
输出：[2,1]

示例 5：
输入：root = [1,null,2]
输出：[1,2]
 
提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 中序遍历 遍历左子树->根节点->右子树   [1,null,2,3] => [1,3,2]
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var genList = function (node, list) {
  if (!node) return [];
  if (node.left !== null) {
    genList(node.left, list);
  }
  if (node.val !== null) {
    list.push(node.val);
  }
  if (node.right !== null) {
    genList(node.right, list);
  }
  console.log(list);
  return list;
};

var inorderTraversal = function (root) {
  let list = [];
  list = genList(root, list);
  return list;
};

//
