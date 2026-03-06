const codeSnippets_二叉树深度 = {
    "二叉树深度": `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(Node):
    if Node is None:
        return 0
    else:
        depth_left = maxDepth(Node.left)
        depth_right = maxDepth(Node.right)
    return max(depth_left, depth_right) + 1`
};