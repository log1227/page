const codeSnippets_重建二叉树 = {
    "重建二叉树": `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rebuild_from_DLR_LDR(DLR, LDR):
    if not DLR:
        return None
    if len(DLR) ==1:
        return TreeNode(DLR[0])
    return TreeNode(DLR[0], rebuild_from_DLR_LDR(DLR[1 : LDR.index(DLR[0]) + 1], LDR[ : LDR.index(DLR[0])]), rebuild_from_DLR_LDR(DLR[LDR.index(DLR[0]) + 1 : ], LDR[LDR.index(DLR[0]) + 1 : ]))

def DLR(node):
    if node is None:
        return
    else:
        print(node.val, end=" ")
        if node.left is not None:
            DLR(node.left)
        if node.right is not None:
            DLR(node.right)

def LDR(node):
    if node is None:
        return
    else:
        if node.left is not None:
            LDR(node.left)
        print(node.val, end=" ")
        if node.right is not None:
            LDR(node.right)

my_DLR = ["A", "B", "D", "E", "H", "J", "C", "F", "I", "G"]
my_LDR = ["D", "B", "H", "J", "E", "A", "F", "I", "C", "G"]
rebuild_tree = rebuild_from_DLR_LDR(my_DLR, my_LDR)
DLR(rebuild_tree)
print("\\n", end="")
LDR(rebuild_tree)
print("\\n", end="")`
};