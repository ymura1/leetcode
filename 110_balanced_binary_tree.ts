
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number, left?: TreeNode, right?: TreeNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * 
 * @param {*} root TreeNode
 * @returns boolean
 */
var isBalanced = function(root: TreeNode | null): boolean {
    function checkBalance(root: TreeNode | null): [boolean, number] {
        if (!root) {
            return [true, 0];
        }

        let left = checkBalance(root.left);
        let right = checkBalance(root.right)
        let isBalanced = (Math.abs(left[1] - right[1]) <= 1) && left[0] && right[0];
        return [isBalanced, 1 + Math.max(left[1], right[1])]
    }

    return checkBalance(root)[0];
};

export { isBalanced, TreeNode }
