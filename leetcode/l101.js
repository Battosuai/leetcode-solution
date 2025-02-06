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
var isSymmetric = function (root) {
    return areSymmetric(root, root);
};

function areSymmetric(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    return (
        left.val === right.val &&
        areSymmetric(left.left, right.right) &&
        areSymmetric(left.right, right.left)
    );
}

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3])); // true
console.log(isSymmetric([1, 2, 2, null, 3, null, 3])); // false
