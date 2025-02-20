import { isBalanced, TreeNode } from "../110_balanced_binary_tree";

test('balanced binary tree', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(2);
    const node4 = new TreeNode(3);
    const node5 = new TreeNode(3);
    const node6 = new TreeNode(4);
    const node7 = new TreeNode(4);
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node4.left = node6;
    node4.right = node7;
    expect(isBalanced(node1)).toBe(false);
});

test('empty tree', () => {
    expect(isBalanced(null)).toBe(true);
});

test('single node tree', () => {
    const node1 = new TreeNode(1);
    expect(isBalanced(node1)).toBe(true);
});

test('balanced tree with two levels', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(2);
    node1.left = node2;
    node1.right = node3;
    expect(isBalanced(node1)).toBe(true);
});

test('unbalanced tree with three levels', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(2);
    const node4 = new TreeNode(3);
    node1.left = node2;
    node2.left = node3;
    node3.left = node4;
    expect(isBalanced(node1)).toBe(false);
});