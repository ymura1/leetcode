import invertTree from "../226_Invert_Binary_Tree";
import TreeNode from "../TreeNode";

test('invertTree should invert a binary tree', () => {
    const node1 = new TreeNode(4);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(7);
    const node4 = new TreeNode(1);
    const node5 = new TreeNode(3);
    const node6 = new TreeNode(6);
    const node7 = new TreeNode(9);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node3.left = node6;
    node3.right = node7;

    const inverted = invertTree(node1);

    expect(inverted?.val).toBe(4);
    expect(inverted?.left?.val).toBe(7);
    expect(inverted?.right?.val).toBe(2);
    expect(inverted?.left?.left?.val).toBe(9);
    expect(inverted?.left?.right?.val).toBe(6);
    expect(inverted?.right?.left?.val).toBe(3);
    expect(inverted?.right?.right?.val).toBe(1);
});

test('invertTree should handle null input', () => {
    expect(invertTree(null)).toBeNull();
});

test('invertTree should handle single node tree', () => {
    const node = new TreeNode(1);
    const inverted = invertTree(node);
    expect(inverted?.val).toBe(1);
    expect(inverted?.left).toBeNull();
    expect(inverted?.right).toBeNull();
});

test('invertTree should handle tree with only left children', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.left = node2;
    node2.left = node3;

    const inverted = invertTree(node1);

    expect(inverted?.val).toBe(1);
    expect(inverted?.left).toBeNull();
    expect(inverted?.right?.val).toBe(2);
    expect(inverted?.right?.left).toBeNull();
    expect(inverted?.right?.right?.val).toBe(3);
});

test('invertTree should handle tree with only right children', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);

    node1.right = node2;
    node2.right = node3;

    const inverted = invertTree(node1);

    expect(inverted?.val).toBe(1);
    expect(inverted?.right).toBeNull();
    expect(inverted?.left?.val).toBe(2);
    expect(inverted?.left?.right).toBeNull();
    expect(inverted?.left?.left?.val).toBe(3);
});