const codeSnippets_基础语法 = {
    "基础语法": `import math
''' python 多行代码
    Python 通常是一行写完一条语句，但如果语句很长，可以使用反斜杠 \\ 来实现多行语句
        如：total = item_one + \\
                item_two + \\
                item_three
    同一行显示多条语句用 ; 隔开
'''

''' enumerate
        同时获取可迭代对象的元素及其对应的索引
        如：    fruits = ["apple", "banana", "cherry"]
                for index, fruit in enumerate(fruits， start = 0):      #start可选，start = 0表示从索引0开始
                        print(f"Index: {index}, Fruit: {fruit}")
'''

''' python print
        1. 输出多个值，用逗号分隔，打印出来会有空格
                例如：  print("Hello", "World", 123)    # 输出：Hello World 123

        2. 附带参数
                sep 参数：指定多个值之间的分隔符（默认为空格）
                        例如：  print("Hello", "World", sep="-")        # 输出：Hello-World
                end 参数：指定输出后的结束符（默认是换行符 \\n）
                        例如：  print("Hello", end=" ")
                                print("World")                          # 输出：Hello World（在同一行）
        3. 格式化输出
                使用 % 格式化
                        * %s            用于字符串（任何类型的数据都可以通过 str() 转换为字符串）。
                        * %d 或 %i      用于整数。
                        * %f            用于浮点数。
                        * %x 或 %X：    用于十六进制表示的整数（小写或大写）。
                        * %o            用于八进制表示的整数。
                        * %e 或 %E：    用于科学计数法表示的浮点数（小写或大写）

                        例如：print("My name is %s and I am %d years old." % (name, age))

                使用 f-string 格式化
                        在字符串前加入f可直接嵌套变量、表达式
                                例如：  print(f"Pi: {3.14159:.2f}")     # 输出：Pi: 3.14
                                        print(f"Square: {10 ** 2}")     # 输出：Square: 100
'''

''' python 数据类型

        Number          数字            String          字符串
        List            列表            Tuple           元组
        Set             集合            Dictionary      字典
        无序：Set、Dictionary
        不可变类型：Number、String、Tuple       可变类型：List、Set、Dictionary
                可变类型与不可变类型：
                        不可变类型修改值相当于新建并获取地址，例如a = 5,再赋值a = 10，是新int 了一个10，让a指向它，再丢弃5
                        可变类型修改值是修改了本体，并没有新建并获取地址，比如list=[1, 2, 3, 4], list[2] = 5，是改变了[1, 2, 3, 4]这个列表，而list仍然指向这个列表
                        不可变类型在参数传递时传的是副本（值传递），如果该变量在函数内部被修改了，不会影响函数外的原始变量
                                例如：  def fun(a):
                                                a = 10
                                        
                                        x = 5
                                        fun(x)
                                        print(x)        #结果为5，因为是不可变类型
                                        
                                再例如：def change(a):
                                                print(id(a))   # 指向的是同一个对象
                                                a=10
                                                print(id(a))   # 一个新对象

                                        a = 1
                                        print(id(a))
                                        change(a)
                                结果：  4379369136
                                        4379369136
                                        4379369424
                        可变类型在参数传递时传的是对象的引用（引用传递），在函数内部修改变量会影响函数外的原始对象

# 测试程序
a, b, c, d, e, f, g, h, i = 1, 5.5, True, 4+3j,'a', [ 'a', [1, 2]], (1, 2), {1, 2}, {'a': 1}
print(type(a), type(b), type(c), type(d), type(e), type(f))
# 运行结果
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'> <class 'str'> <class 'list'> <class 'tuple'> <class 'set'> <class 'dict'>
        
        1. Number（数字）
                * 分类：int（长整型）、float、bool、complex（复数）
                        · 复数为 a + bj 或 complex(a,b)，实部 a 虚部 b ，都是浮点型
                * 二进制用0b或0B表示，如a = 0b111100; 八进制用0o或00表示; 十六进制用0x或0X表示
                * 数学函数(带math.的需要import math)：
                        · abs(x)：绝对值
                        · math.exp(x)：           e指数
                        · math.floor(x)：         向下取整
                        · math.ceil(x)：          向上取整
                        · math.log(x,y)：         以y为底的x对数，如math.log(27,3)结果为3.0，不规定y默认底为e
                        · max(x1, x2, ...)：      返回序列中的最大值
                        · min(x1, x2, ...)：      返回序列中的最小值
                        · pow(x， y)：            x ** y
                        · round(x, n)：           返回浮点数 x 的四舍五入值，如果有n则表示四舍五入的位数
                        · math.sqrt(x)：          开平方
                        · math.acos(x)            返回x的反余弦弧度值
                        · math.asin(x)            返回x的反正弦弧度值
                        · math.atan(x)            返回x的反正切弧度值
                        · math.cos(x)             返回x的弧度的余弦值
                        · math.sin(x)             返回的x弧度的正弦值
                        · math.tan(x)             返回x弧度的正切值
                        · math.degrees(x)         弧度转角度
                        · math.radians(x)         角度转弧度
                        · math.pi                 π
                        · math.e                  自然常数
                * 随机数函数（import random）：
                        · random.random()         [0,1)随机实数
                        · random.uniform(x, y)    [x,y]随机实数

        2. String(字符串)
                * Python 只有字符串，一个字符即长度为1的String
                * 字符串运算符： + 连接 * 重复
                * 索引：数组方式，从左往右以 0 开始，右往左以 -1 开始
                * 截取：str[start:end]，不包括end，加上步长：str[start:end:step]
                * 转义：
                        · 反斜杠 \\ 转义， r 可以让反斜杠不转义
                                如：print(r"\\n")不是换行而是\\n
                        · \\\\    →       \\
                        · \\'    →       '
                        · \\"    →       "
                        · \\b    →       退格
                        · \\000  →       空
                        · \\n    →       换行
                        · \\r    →       回车

# 测试程序
str='123456789'
print(str[:-1])                 # 输出第一个到倒数第二个的所有字符（-1不算）
print(str[1:8:2])               # 从第2个开始到第8个，步长为2（每隔一个的字符）
print(str[-1::-1])              # 从最后一个开始，遍历所有，步长-1表示逆向
print(str * 2)                  # 输出字符串两次
print(str + 'abc')              # 连接字符串
print('hello\\nrunoob')          # 使用反斜杠(\\)+n转义特殊字符
print(r'hello\\nrunoob')         # 在字符串前面添加一个 r，表示原始字符串，不会发生转义
print( "a", end=" " )           #print自动换行，如果要实现不换行需要在变量末尾加上 end=""：(用空字符取代换行，也可以用其他标点)
# 运行结果
12345678
2468
987654321
123456789123456789
123456789abc
hello
runoob
hello\\nrunoob
a

        3. List（列表）    []
                * 其中元素的类型可不同，可嵌套列表
                * 同字符串一样，可被索引截取， + * 操作
                * 列表的创建：
                        my_list = []            #空列表
                        my_list = [1, 2, 3]     #可以通过重新定义改变长度，而不用append()
                * 列表的增加：(不能通过越界赋值增加长度！)
                        · append()：末尾加,相当于 a[len(a):] = [x]
                                如：my_list.append(4)   #加了一个元素4
                        · insert()：指定位置加
                                如：my_list.insert(1, "a")      #在my_list[1]插入"a",原来的my_list[1]变成my_list[2]
                * 列表的合并：
                        · 用 + 连接
                        · extend()：连接目标列表到原列表末尾,a[len(a):] = L
                                如：    list1 = [4, 5]
                                        my_list.extend(list1)
                        · 用 * 重复
                * 列表的删除：
                        · pop()：删除指定索引元素，不指定默认最后一个
                        · remove()：删除指定索引元素
                        · del：删除
                                如；del my_list[1:3]    #删除索引1到2的元素
                        · clear()：清空列表,等于del a[:]
                                如：my_list.clear()     #my_list变成空列表
                * 列表的修改：
                        · 索引修改
                        · 切片修改
                                如：my_list[1:3] = ["a", "b"]
                * 列表的查找：
                        · 索引访问（-1可以访问最后一个）
                        · 切片访问
                        · in 查询某个元素是否在列表中
                                如： if 2 in my_list:
                        · for 循环遍历
                                如： for i in my_list:
                * 列表其他操作：
                        · len(list)查询长度
                                如：print(len(my_list))
                        · [::-1]切片反转
                                如：reversed_list = my_list[::-1]
                        · max(list)返回最大元素（只允许全数字或全字符串，字符串大小根据字典序从左到右字符逐一比较）
                        · min(list)
                        · list(tuple)元组转列表
                        · .count()统计某元素出现个数
                                如：my_list.count(1)
                        · .sort()排序
                        · .reverse()倒序
                        · .copy()复制

        4. Tuple（元组）    ()
                * 其中元素的类型可不同，可嵌套元组
                * 其中元素不能修改，但可包含可变的对象，如列表
                        如：my_tuple = ([1, 2, 3], [4, 5, 6])
                            my_tuple[0].pop()
                * 同字符串一样，可被索引截取， + * 操作，in 判断是否在元组里
                * 元组的创建：
                        · empty_tuple = ()      # 空元组
                        · one_tuple = (1,)      # 一个元素的元组，需要加逗号，不然看成括号
                * 元组的删除：    del()
                * 元组的其他操作：
                        · len(tuple)查询长度
                        · max(tuple)
                        · min(tuple)
                        · tuple()转化为元组

        5. Set（集合）    {}
                * 无序、可变、唯一（自动去重复）
                * 集合的创建：
                        · my_set = {1, 2, 3, 4}
                        · my_set = set([1, 2, 3, 4])
                        · 空集合创建：
                                empty_set = set()
                                        注：不能用{}创建空集，因为{{}是空字典
                * 集合的增加：
                        · add()：添加单个元素（自动去重复）
                        · update()：批量添加
                                如：my_set.update([4, 5])
                * 集合的删除：
                        · remove()：删除指定元素
                                如：my_set.remove(2)
                        · pop()：随即删除一个并返回该值
                                如：removed_element = my_set.pop()
                        · clear()：清空集合
                                如：my_set.clear()
                * 集合的查找：
                        · in ：元素是否在集合里
                                如：if 2 in my_set:
                        · for 遍历
                                如：for i in my_set

                * 集合的其他操作：
                        · len(set)：返回长度
                        · & ：交集
                        · | ：并集
                        · - ：差集（一个有另一个没有）
                        · ^ ：两集不同时存在的元素
                        · issubset()：是否是别人的子集
                        · issuperset()：是不是别人的超集

# 测试程序
a = set('abracadabra')
b = set('alacazam')
print(a)
print(b)
print(a - b)
print(a | b)
print(a & b)
print(a ^ b)
set1 = {1, 2}
set2 = {1, 2, 3}
print(set1.issubset(set2))
print(set2.issuperset(set1))
# 运行结果
{'b', 'c', 'a', 'd', 'r'}
{'z', 'c', 'a', 'm', 'l'}
{'b', 'd', 'r'}
{'b', 'z', 'c', 'a', 'm', 'd', 'l', 'r'}
{'c', 'a'}
{'m', 'b', 'l', 'd', 'z', 'r'}
True
True

        6. Dictionary（字典）    {:}
                * 键必须无序唯一，使用不可变类型(数字，字符串，元组)(元组中不可包含可变类型，如列表)
                * 构造函数 dict() 可以直接从键值对序列中构建字典
                * 创建空字典使用 { }
                * 字典的创建：
                        · my_dict = {'a': 1}
                        \` 空字典：
                                如：emptyDict = {}
                                或：emptyDict = dict()
                * 字典的增加：
                        · 向字典增加没有的键，就会增加：
                                如：my_dict = {"a": 1, "b": 2}
                                    my_dict["c"] = 3
                                    print(my_dict)  # 输出: {'a': 1, 'b': 2, 'c': 3}
                        · 批量添加用update()
                                如：my_dict.update({"d": 4, "e": 5}
                * 字典的删除：
                        · del
                                如：del my_dict["b"]
                        · pop()：删除键，并返回键对应的值
                                如：value = my_dict.pop("b")
                        · clear()：清空字典
                                如：my_dict.clear()
                * 字典的修改：
                        · 索引修改
                * 字典的查找：
                        · 索引查找
                        · keys()、values()、items()遍历
                                如：for key in my_dict.keys()           #遍历键
                                    for value in my_dict.values()       #遍历值
                                    for key, value in my_dict.items()   #遍历键值对， items() 方法可以同时读出键和值
                        · in：键是否在字典里(注意是键)
                                如：if 'a' in my_dict:
                * 字典的其他操作：
                        · len(dict)查询长度
'''

''' python 类型转换
        1. 隐式类型转换：
                * 整数与浮点数运算时结果为浮点数
                        整数除法总是返回浮点数
                                如:   17 / 3 = 5.666666666666667
                        只想返回整数用 // ，但是有浮点数参结果也是浮点数
                                如：  7 // 2 = 3;     7.0 // 2 = 3.0
                * bool与整数运算时True为1，False为0
                * 所有非零数字（整数、浮点数、复数），非空序列的真值都是True
                        如：    bool(0)    # False       bool(-42)         # True
                                bool('')   # False       bool('P')         # True
                                bool([])   # False       bool([1, 2, 3])   # True
                * 数字与字符串型的数字运算时会报错
        2. 显式类型转换
                使用 int()、float()、str() 等预定义函数来执行显式类型转换，如：
                        x = int(1)              # x 输出结果为 1
                        y = int(2.8)            # y 输出结果为 2
                        z = int("3")            # z 输出结果为 3
                        
                        x = float(1)            # x 输出结果为 1.0
                        y = float(2.8)          # y 输出结果为 2.8
                        z = float("3")          # z 输出结果为 3.0
                        w = float("4.2")        # w 输出结果为 4.2

                        x = str("s1")           # x 输出结果为 's1'
                        y = str(2)              # y 输出结果为 '2'
                        z = str(3.0)            # z 输出结果为 '3.0'

                        complex(x, y)           #实数部分为 x，虚数部分为 y
'''

'''python 地址
        通过id()取得
        赋值本质上是地址的引用，例如：
                a = 10
                b = a
        这里b拿到了a的地址，如果a修改了值，有两种情况：
                1. a是不可变数据类型，那么a会指向新的值，旧的值仍被b指向，如：
                        a = 10
                        b = q
                        a = 20  #此时b仍为10
                
                2. a是可变数据类型，那么a和b都会变
                        a = [1, 2, 3]
                        b = a
                        a = [1, 2, 3, 4]        #此时ab都是[1, 2, 3, 4]
'''

''' Python 运算符
        1. 算数运算符：
                +    -    *    /    %(取模)    **（幂）    //(整除)
                优先级：** 最高;    *, /, //, % 次之;    +, -最低
        2. 比较运算符：
                ==    ！=    >    <    >=    <=
        3. 赋值运算符：
                =    +=    -=    *=    /=    %=    **=    //=
        4. 位运算符:
                &（按位与）    |（按位或）    ^（按位异或，异为1）    ~（按位反）    <<（左移）    >>（右移）
                优先级：<<, >> 最高    &第二    ^第三    |第四
        5. 逻辑运算符:
                and    or    not
                优先级：not最高    and第二    or最低
        6. 成员运算符：
                in      如果在指定的序列中找到值返回 True，否则返回 False
                not in  如果在指定的序列中没有找到值返回 True，否则返回 False
        7. 身份运算符：
                is      判断两个标识符是不是引用自一个对象（地址一不一样）
                is not  判断两个标识符是不是引用自不同对象
                id() 函数用于获取对象内存地址，is 相当于 id(x) == id(y)，is not 相当于 id(x) ！= id(y)

# 测试程序
a = 60          # 60 = 0011 1100
b = 0b00001101  # 13 = 0000 1101
c = a & b       # 12 = 0000 1100
print (c)
c = a | b       # 61 = 0011 1101
print (c)
c = a ^ b       # 49 = 0011 0001
print (c)
c = ~a          # -61 = 1100 0011
print (c)
c = a << 2      # 240 = 1111 0000
print (c)
c = a >> 2      # 15 = 0000 1111
print (c)
# 运行结果
12
61
49
-61
240
15
'''

''' Python 条件与循环
        1. if 语句
                结构：
                        if 条件1:
                                语句1
                        elif 条件2:
                                语句2
                        else:
                                语句3
        2. while 循环（没有do...while）
                结构：
                        while 条件：
                                语句1
                        else:           #可选，如果不满足while条件执行
                                语句2
        3. for 循环
                结构：
                        for 元素 in 序列:
                                语句1
                        else:           #可选，循环结束后执行（break后不会执行）
                                语句2
                * 可配合 range() 函数：
                        for number in range(1,6):
                        for i in range(len(list)):
                        range()用法：
                                range(start, stop, step)
                                        · 左闭右开，start不指定默认为0，step不指定默认为1
                                        · step为负数，递减序列，start必须大于stop
'''

''' python 推导式
        1. 列表(list)推导式
                [表达式 for 变量 in 可迭代对象] 或 [表达式 for 变量 in 可迭代对象 if 条件]  ：for in 遍历可迭代对象，创建一个元素为表达式结果的新列表
                        例如：  #只选择长度大于3的字符串并全部大写
                                names = ['Bob','Tom','alice','Jerry','Wendy','Smith']
                                new_names = [name.upper()for name in names if len(name)>3]
                                print(new_names)
                        结果：  ['ALICE', 'JERRY', 'WENDY', 'SMITH']

        2. 字典(dict)推导式
                { 键表达式: 表达式 for 变量 in 可迭代对象 } 或 { 键表达式: 表达式 for 变量 in 可迭代对象 if 条件 } ：for in 遍历可迭代对象，创建一个表达式结果的键：表达式结果的值的新字典、
                        例1：   #创建一个键是原本序列元素的，值是键长度的字典
                                listdemo = ['Google','Runoob', 'Taobao']
                                newdict = {key:len(key) for key in listdemo}
                                print(newdict)
                        结果：  {'Google': 6, 'Runoob': 6, 'Taobao': 6}

                        例2：   #创建一个值是键的平方的字典
                                dic = {x: x**2 for x in (2, 4, 6)}
                                print(dic)
                        结果：  {2: 4, 4: 16, 6: 36}

        3. 集合(set)推导式
                { 表达式 for 变量 in 可迭代对象 } 或 { 表达式 for 变量 in 可迭代对象 if 条件 } ： for in 遍历可迭代对象，创建一个元素为表达式结果的新集合
                        例1：   setnew = {i**2 for i in (1,2,3)}
                                print(setnew)
                        结果：  {1, 4, 9}

                        例2：   #判断字符串中除了abc还有那些字符
                                a = {x for x in 'abracadabra' if x not in 'abc'}
                                print(a)
                        结果：  {'d', 'r'}

        4. 元组(tuple)推导式（生成器表达式）
                (表达式 for 变量 in 可迭代对象) 或 (表达式 for 变量 in 可迭代对象 if 条件)  ：for in 遍历可迭代对象，创建一个元素为表达式结果的新元组
                        例如：  a = (x for x in range(1,10))
                                print(a)
                                print(tuple(a))
                        结果：  <generator object <genexpr> at 0x00000261DE1BCAC0>      #返回的是生成器对象，使用 tuple() 转换为元组
                                (1, 2, 3, 4, 5, 6, 7, 8, 9)
'''

''' python 迭代器
        迭代器用于访问集合元素（字符串、列表、元组）
        迭代器有两个基本的方法：iter() 和 next()
                例如：  list=[1,2,3,4]
                        it = iter(list)    # 创建迭代器对象
                        print (next(it))   # 输出迭代器的下一个元素
                        print (next(it))
                结果：  1
                        2
                        
                例如：  list=[1,2,3,4]
                        it = iter(list)    # 创建迭代器对象
                        for x in it:
                        print (x, end=" ")
                结果：  1 2 3 4
'''

''' python 函数
        def 函数名(参数1, 参数2):
                函数语句
                return 结果

        1. 参数
                （1）关键字：如果调用函数时使用关键字，可以无序
                        例如：  def printinfo( name, age ):
                                        print ("名字: ", name)
                                        print ("年龄: ", age)
                                        return

                                printinfo( age=50, name="runoob" )

                （2）默认参数：如果没有传入，就使用默认值
                        例如：  def printinfo( name, age = 35 ):        #未传入age的值就默认为35
                                        print ("名字: ", name)
                                        print ("年龄: ", age)
                                        return

                （3）不定长参数： *变量名（如果不写变量名就在调用时用关键字），不定长变量用元组存储接收的值；如果是**变量名，就是以字典的形式存储不定长数据
                        例如：  def printinfo( arg1, *vartuple ):
                                        print ("输出: ")
                                        print (arg1)
                                        print (vartuple)
                                        
                                printinfo( 70, 60, 50 )
                        结果：  70
                                (60, 50)
                        
                        例如：  def printinfo( arg1, **vardict ):
                                        print ("输出: ")
                                        print (arg1)
                                        print (vardict)
                                        
                                printinfo(1, a=2,b=3)
        
        2. 匿名函数（lambda）
                lambda 参数列表 : 表达式
                无名称，只能通过赋值给变量或作为参数传递给其他函数来使用
                通常只包含一行代码
                        例：    x = lambda a, b : a * b
                                print(x(5, 6))                  #结果为30
'''

''' python __name__ 与 __main__
        用于区分该.py文件是作为模块导入还是直接运行，当__name__为__main__表示直接执行
                例如：  if __name__ == "__main__"：
                                语句
                表示只有当.py文件直接运行时，才会执行这段代码，也就可以实现主函数的效果，if __name__ 外的代码是可以被外部引用的
'''

''' python 异常
        异常处理
                1. try/except：
                        * 执行try 子句，如果没有异常发生，忽略 except 子句，try 子句执行后结束
                        * 如果有异常， try 子句余下的部分将被忽略，如果异常的类型和 except 之后的名称相符，那么对应的 except 子句将被执行
                        * 如果一个异常没有与任何的 except 匹配，那么这个异常将会传递给上层的 try 中
                        * 一个 try 语句可能包含多个except子句，一个except子句也可以同时处理多个异常，如except (RuntimeError, TypeError, NameError):
                        * 最后一个except子句可以忽略异常的名称，，用于处理未被识别的异常

                2. try/except...else：
                        * 在 try/except 的基础上再加 else 子句，在 try子句 没有异常发生的时候执行

                3. ry-finally：
                        * 在 try/except...else 的基础上再加 finally 子句，也就是最后不管有无异常都会执行
        
        抛出异常
                * 使用 raise 语句抛出一个指定的异常(必须是一个异常的实例或者是异常的类，也就是 Exception 的子类)
                * raise语法格式：raise Exception (, args [, traceback])
                        例如：  raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
'''

''' python 面向对象
        class ClassName:
        
        构造方法：      def __init__(self, 构造参数):
        实例化：        x = MyClass(构造参数)
        类方法：        必须包含slef参数
        继承：          class 子类(父类1, 父类2, ......):       （如果多个父类中有同名方法，子类使用时未指定，从左到右优先级）
        python 不支持方法重载
        python 中可以嵌套类，一个类的属性是另一个类的实例
        class中的类属性和实例属性：
                1. 在类下直接声明的是类属性，每个实例可以独享，也可以通过类名统一操作
                2. 在构造方法中声明的self.变量名 为实例属性，只能独享不能统一操作
                        例如：  class my_class:
                                        a = 1
                                        def __init__(self):
                                                self.b = 2
                                test_1 = my_class()             # test_1.a = 1, test_1.b = 2
                                test_2 = my_class()             # test_2.a = 1, test_2.b = 2
                                test_2.a, test_2.b = 3, 4       # test_1.a = 1, test_1.b = 2, test_2.a = 3, test_2.b = 4
                                my_class.a = 6                  # test_1.a = 6, test_1.b = 2, test_2.a = 6, test_2.b = 4 (所有的a值都修改了)
                                my_class.b = 9                  # test_1.a = 6, test_1.b = 2, test_2.a = 6, test_2.b = 4 (无效)
'''
`
};