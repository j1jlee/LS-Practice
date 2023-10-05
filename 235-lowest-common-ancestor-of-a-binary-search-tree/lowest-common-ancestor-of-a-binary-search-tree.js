/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //console.log('root, root.val', root, root.val)
    
    if (root.val == p.val ||
    root.val == q.val ||
    (root.val > p.val && root.val < q.val)) {
        console.log('should hit');
        // return root.val
        return root;
    }

    let currentNode = root;

    while (true) {
        
        if (currentNode.val > p.val &&
        currentNode.val > q.val) {
            currentNode = currentNode.left;
        } else if (currentNode.val < p.val &&
        currentNode.val < q.val) {
            currentNode = currentNode.right;
        } else {
            return currentNode;
            // return currentNode.val;
        }
    }
};