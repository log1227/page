const codeSnippets_深度优先搜素 = {
    "深度优先搜素": `def undirected_DFS(value, near_matrix, visited, start=  0):
    print(value[start], end=" ")
    visited[start] = 1
    if 0 in visited:
        for i in range(len(value)):
            if near_matrix[start][i] != 0 and visited[i] != 1:
                undirected_DFS(value, near_matrix, visited, i)

value = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"]
near_matrix = [[0, 1, 1, 0, 0, 0, 0, 0],
               [1, 0, 0, 1, 1, 0, 0, 0],
               [1, 0, 0, 0, 0, 1, 1, 0],
               [0, 1, 0, 0, 0, 0, 0, 1],
               [0, 1, 0, 0, 0, 0, 0, 1],
               [0, 0, 1, 0, 0, 0, 0, 0],
               [0, 0, 1, 0, 0, 0, 0, 0],
               [0, 0, 0, 1, 1, 0, 0, 0]]
visited = [0] * len(value)
undirected_DFS(value, near_matrix, visited, start= 0)`
};