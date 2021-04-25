/**
 * 给定一个二叉树和其中一个节点，如何找出中序遍历的下一个节点，节点的指针除了有左，右，还有一个父指针
 * 格式：Node:{
 *         value:xx,
 *         left:Node,
 *         right:Node,
 *         parent:Node
 *      }
 *
 * 思路：假设一个节点 有右子树                  下一个节点则是右子树的最左节点
 *                 无右子树  且该节点是左节点   下一个节点则是他的父节点
 *                          且该节点是右节点   则一层一层往上找直到找到一个节点是它父节点的左节点，那么下一个节点就是该左节点的父节点
 */

function getNextNode(tree) {
  if (tree === null) {
    return null;
  }

  //有右子树
  if (tree.right !== null) {
    tree = tree.right;
    while (tree.left) {
      tree = tree.left;
    }
    return tree;
  }
  //无右子树，节点是左节点
  else if (tree.parent !== null && tree.parent.left === tree) {
    return tree.parent;
  }
  //无右子树，节点是右节点
  else if (tree.parent !== null && tree.parent.right === tree) {
    while (tree.parent !== null && tree !== tree.parent.left) {
      tree = tree.parent;
    }
    return tree.parent;
  }
}
