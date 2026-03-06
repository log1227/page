const codeSnippets_广度优先搜索 = {
    "广度优先搜索": `def undirected_BFS(value, near_matrix, visited, start=  0):
    queue = [start]
    while queue:
        print(value[queue[0]], end=" ")
        visited[queue[0]] = 1
        if 0 in visited:
            for i in range(len(value)):
                if near_matrix[queue[0]][i] != 0 and visited[i] != 1:
                    queue += [i]
                    visited[i] = 1
        del queue[0]

value = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9"]
near_matrix = [[0, 1, 1, 1, 0, 0, 0, 0, 0],
               [1, 0, 1, 1, 0, 0, 0, 0, 0],
               [1, 1, 0, 0, 0, 1, 0, 0, 0],
               [1, 1, 0, 0, 0, 0, 0, 0, 1],
               [0, 0, 0, 0, 0, 1, 1, 1, 0],
               [0, 0, 1, 0, 1, 0, 0, 0, 0],
               [0, 0, 0, 0, 1, 0, 0, 1, 0],
               [0, 0, 0, 0, 1, 0, 1, 0, 0],
               [0, 0, 0, 1, 0, 0, 0, 0, 0]]
visited = [0] * len(value)
undirected_BFS(value, near_matrix, visited, start= 2)`
};