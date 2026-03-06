const codeSnippets_移动零 = {
    "移动零": `'''
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
'''
#思路1：遍历数组统计0的次数并删除0，最后在序列末尾重新添加0
nums = [0,1,0,3,12]
zeros = 0
i = 0
while i < len(nums):
    if nums[i] == 0:
        zeros += 1
        del nums[i]
        i -= 1
    i += 1
#nums = nums + ([0] * zeros)
for i in range(zeros):
    nums.append(0)
print(nums)

#思路2：双指针，左指针指向处理完的系列尾（第一个零，左指针左边全是非0数），右指向待处理序列首部，左右指针中间是0，右指针遇到非零数左右指针交换
nums = [0,1,0,3,12]
left = 0
right = 0
while right < len(nums):
    if nums[right] != 0:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
    right += 1
print(nums)`
};