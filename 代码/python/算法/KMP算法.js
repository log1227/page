const codeSnippets_KMP算法 = {
    "KMP算法": `def compute_next(pattern):
    next_array = [0] * len(pattern)
    j = 0  # j表示最长公共前后缀的长度

    for i in range(1, len(pattern)):
        #如果当前字符不匹配，寻找更短的公共前后缀，直到0
        while j > 0 and pattern[i] != pattern[j]:
            # 如果当前字符不匹配，且j不为0，更新j的值
            j = next_array[j - 1]
        
        # 如果当前字符匹配，更新j的值
        if pattern[i] == pattern[j]:
            j += 1
        
        next_array[i] = j

    return next_array

def KMP(my_str, pattern):
    next_array = compute_next(pattern)
    pos_my_str = 0
    pos_pattern = 0

    while pos_my_str <= len(my_str):
        if pos_pattern == len(pattern):
            return pos_my_str - len(pattern)
        if my_str[pos_my_str] == pattern[pos_pattern]:
            pos_my_str += 1
            pos_pattern += 1
        else:
            if pos_pattern == 0:
                pos_my_str += 1
            else:
                pos_pattern = next_array[pos_pattern - 1]
    return -1

if __name__ == "__main__":
    my_str = "aaaacbbaabcc"
    pattern = "aabcc"
    pos = KMP(my_str, pattern)
    print(pos)`
};