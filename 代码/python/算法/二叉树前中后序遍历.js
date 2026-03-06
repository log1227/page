const codeSnippets_二叉树前中后序遍历 = {
    "二叉树前中后序遍历": `class Node:
    def __init__(self, Node_Data = None, L_child = None, R_child = None):
        self.Node_Data = Node_Data
        self.L_child = L_child
        self.R_child = R_child

def DLR(node):
    if node is None:
        return
    else:
        print(node.Node_Data, end=" ")
        if node.L_child != None:
            DLR(node.L_child)
        if node.R_child !=None:
            DLR(node.R_child)

def LDR(node):
    if node is None:
        return
    else:
        if node.L_child != None:
            LDR(node.L_child)
        print(node.Node_Data, end=" ")
        if node.R_child !=None:
            LDR(node.R_child)

def LRD(node):
    if node is None:
        return
    else:
        if node.L_child != None:
            LRD(node.L_child)
        if node.R_child !=None:
            LRD(node.R_child)
        print(node.Node_Data, end=" ")

Root_Node = Node("A", Node("B", Node("D"), Node("E", Node("H", R_child= Node("J")))), Node("C", Node("F", R_child= Node("I")), Node("G")))
DLR(Root_Node)
print("\\n", end="")
LDR(Root_Node)
print("\\n", end="")
LRD(Root_Node)`
};