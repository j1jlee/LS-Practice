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
 * @return {boolean}
 */
var isBalanced = function(root) {
// var isBalanced = function(root, height = 1) {
    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        let left = dfs(node.left) + 1;
        let right = dfs(node.right) + 1;

        if (Math.abs(left - right) > 1) return Infinity;
                // if (Math.abs(left - right) > 1) return false; //infinity
        //return Math.max(left, right)
        // if (left == false || right == false) return false;
        // else return Math.max(left, right)
        return Math.max(left, right)
    }
    return dfs(root) == Infinity ? false : true;
}





    // if (!root) {
    //     return height;
    // }
    
    // // if (height == 0 && (!root.left && !root.right)) {
    // //     return true;
    // // }
    
    // // if ((root.left && root.left.left && root.left.right && !root.right) || 
    // //     (!root.left && root.right && root.right.left && root.right.left)) {

    // //     console.log('false because one side missing')

    // //     return false;
    // // }

    // if (!root.left && !root.right) {
    //     return height;
    // }

    // if (Math.abs(isBalanced(root.left, height + 1) - isBalanced(root.right, height + 1)) > 1) {
    // // if (isBalanced(root.left, height + 1) != isBalanced(root.right, height + 1)) {
    //     console.log("false because recursion inequality")
        
    //     return false;
    // } 

//     // return true;
// };