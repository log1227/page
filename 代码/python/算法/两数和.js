const codeSnippets_两数和 = {
    "两数和": `'''
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
'''
nums = [2,7,11,15]
target = 9

#暴力搜索，时间复杂度n方
for i in range(len(nums)):
    j = i
    for j in range(i + 1, len(nums)):
        if nums[i] + nums[j] == target:
            print([i, j])

#建立哈希表（字典），in查找是哈希表查找，（对于x查找表中有无target - x）时间复杂度是1
hashtable = {}
for i, num in enumerate(nums):
    if target - num in hashtable:               #注意in关键字是索引字典的键，所以哈希表键用来存数字，值用来存索引
        print([hashtable[target - num], i])     #先判断有没有是个好的习惯
    else:
        hashtable[num] = i                      #没有才加入哈希表`
};