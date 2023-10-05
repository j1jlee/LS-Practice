/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    
    const resNode = new TreeNode(root.val, invertTree(root.right), invertTree(root.left))
    return resNode;
    //return root after solving
};


// function flipBranches(node) {
//     // const nodeVal = node.val;
//     // const tempBranch = node.left;
//     const resNode = new TreeNode(node.val, node.right, node.left)
//     return resNode;
// }