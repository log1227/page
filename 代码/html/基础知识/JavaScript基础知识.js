const codeSnippets_JavaScript基础知识 = {
    "JavaScript基础知识": `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
</head>

<body>
    <p id="TypeOf"></p>
    <p id="shuzu"></p>
    <p id="duixiang"></p>
    <button onclick="button_1()" style="background-color: brown; font-size: 50px; color: aquamarine;">点我</button>
    <p id="btn1"></p>
    <button onclick="this.innerHTML= '这里改变按钮文字' ">也可以写内部函数</button><br><br>
    <button id="btn2">按钮2</button>
    <p id="btn2_p"></p>
    <button id="btn3">按钮2</button>
    <p id="btn3_p"></p>



    <script>
        /*JS 输出：
            使用 window.alert() 弹出警告框。
            使用 document.write() 方法将内容写到 HTML 文档中。
            使用 innerHTML 写入或读取HTML元素
                var str = document.getElementById("demo").innerHTML;    //将id 为 demo的元素内的文本读取到str
                document.getElementById("demo").innerHTML = "....;      //将id 为 demo的元素内的文本替换为...
            使用 console.log() 写入到浏览器的控制台
        */

        /*JS 数据类型
            JavaScript 拥有动态类型:
                var x;               // x 为 undefined
                var x = 5;           // 现在 x 为数字
                var x = "John";      // 现在 x 为字符串
            变量的数据类型可以使用 typeof 操作符来查看：
                typeof "John"                // 返回 string
                typeof 3.14                  // 返回 number
                typeof false                 // 返回 boolean
                typeof [1,2,3,4]             // 返回 object
                typeof {name:'John', age:34} // 返回 object
            若未使用var声明，则为全局变量，超出所在函数作用域
        */
        document.getElementById("TypeOf").innerHTML = 	typeof "john" + "<br>" + typeof 3.14 + "<br>" + typeof false + "<br>" + typeof [1, 2, 3, 4] + "<br>" + typeof { name: 'john', age: 34 };

        /*JS 数组
            数组的创建：
                1.  使用[]：
                    var emptyArray = [];    (声明)
                    var emptyArray = [1, 2, 3, 4, 5];   （赋值）

                    或：
                    var numbers = [1, 2, 3, 4, 5];      （声明并赋值）

                2.  Array 构造函数：
                    var cars=new Array();
                    cars[0]="Saab";
                    cars[1]="Volvo";
                    cars[2]="BMW";

                    var arrayWithLength = new Array(5);

                    var fruits = new Array('apple', 'banana', 'cherry');

            数组长度：  数组名.length取得

            数组的增删改查：
                1.增：
                    push()：在数组的末尾添加一个或多个元素，并返回新的数组长度
                        var numbers = [1, 2, 3];
                        var arrayLength = numbers.push(4, 5);   //返回值arrayLength = 5

                    unshift()：在数组的开头添加一个或多个元素，并返回新的数组长度

                    splice()：在数组的指定位置添加、删除或替换元素。第一个参数表示开始位置，第二个参数表示要删除的元素个数（设置为 0 则不删除），后续参数为要添加的元素
                        var numbers = [1, 2, 4, 5];
                        // 在索引为 2 的位置添加元素 3
                        numbers.splice(2, 0, 3);
                        console.log(numbers); // 输出: [1, 2, 3, 4, 5]

                2.删：
                    pop()：移除数组的最后一个元素，并返回该元素
                        var numbers = [1, 2, 3];
                        var lastElement = numbers.pop();        //lastElement为3
                    
                    shift()：移除数组的第一个元素，并返回该元素

                    splice()：
                        var numbers = [1, 2, 3, 4, 5];
                        // 从索引为 2 的位置开始删除 2 个元素
                        numbers.splice(2, 2);
                        console.log(numbers); // 输出: [1, 2, 5]

                3.改：
                    直接索引修改：
                        numbers[1] = 10;

                    splice()：
                        numbers.splice(1, 1, 10);   // 从索引为 1 的位置开始删除 1 个元素，并替换为 10
                    .reverse()：反转数组

                4.查：
                    indexOf()：查找元素在数组中第一次出现的索引，如果元素不存在则返回 -1
                        var numbers = [1, 2, 3, 2];
                        var index = numbers.indexOf(2);
                        console.log(index); // 输出: 1

                    lastIndexOf()：找元素在数组中最后一次出现的索引，如果元素不存在则返回 -1    
        */
        var mixedArray = [1, 'hello', true, { name: 'John' }, [1, 2]];
        mixedArray.push(['java', 'script']);
        mixedArray[0] = 'aaa';
        for(var i = 0; i < 6; i ++ ){
            document.getElementById("shuzu").innerHTML += mixedArray[i] + "<br>";
        }
        
        //JS 对象
        var person={
            firstname : "Luo",
            lastname  : "HaoYan",
            id        :  1227,
            fullName : function() {
                return this.firstname + " " + this.lastname + " " + this.id;
            }
        };
        document.getElementById("duixiang").innerHTML = person.fullName();

        /*JS 事件
            1.onclick绑定按钮，点击时调用
            2.元素.onclick = function
            3.addEventListener('click', function(){});
        */
        function button_1(){
            document.getElementById("btn1").innerHTML = Date();
        }

        var btn_2 = document.getElementById("btn2");
        btn_2.onclick = function(){
            document.getElementById("btn2_p").innerHTML = "这是第二种监听方式";
        }

        var btn_3 = document.getElementById("btn3");
        btn_3.addEventListener('click', function () {
            document.getElementById("btn3_p").innerHTML = "这是第三种监听方式";
        });
        
        /*JS 字符串
            1.可以使用单引号或双引号：
                var carname = "Volvo XC60";
                var carname = 'Volvo XC60';

            2.实际上是一个字符数组：
                var name = "RUNOOB";
                var letter = name[2];

            3.使用转义字符避免歧义：
                \\'  单引号      \\"  双引号      \\\\  反斜杠
                \\n  换行        \\r  回车        \\t  tab         \\b  退格

                var x = 'It\\'s alright';
                var y = "He is called \\"Johnny\\"";

            4.字符串长度：
                var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var sln = txt.length;

            5.字符串操作：
                截取：
                （1）substring(start, end)：截取子字符串（不包括 end 索引）
                （2）substr(start, length)：提取字符串的一部分，从 start 索引开始，提取指定长度

                查找：
                （1）indexOf(searchValue)：返回指定子字符串的首次出现索引
                （2）lastIndexOf(searchValue)：返回子字符串的最后一次出现索引
                （3）includes(searchValue)：判断字符串是否包含某些子字符串
                
                修改：
                （1）replace(searchValue, newValue)：替换字符串中的子字符串
                        如果需要替换所有匹配项，需要结合正则表达式，如text.replace(/World/g, "Earth")
                （2）toUpperCase()：将字符串转换为大写
                （3）toLowerCase()：将字符串转换为小写

                分割
                （1）split(separator)：将字符串分割为数组
                        如：
                            let text = "Hello,World,Javascript";
                            let arr = text.split(",");
                            console.log(arr); // 输出：["Hello", "World", "Javascript"]
                    如果是.split("")就是把所有字符一一分割开
                （2）concat()：拼接两个字符串
                        如：
                            let text1 = "Hello ";
                            let text2 = "World";
                            console.log(text1.concat(text2)); // 输出：Hello World
                （3）join(separator)：将数组中的元素用指定的分隔符连接为字符串
                        如：
                            let arr = ["Hello", "World"];
                            console.log(arr.join(" ")); // 输出：Hello World
                    如果是join("")就是把所有字符一一结合起来
        */

        /*JS 比较
            ==：值相等就行
            ===：值和类型均相等
            !=：值不相等
            !==：值和类型均不相等
        */

        /*JS switch
            switch(n){
                case 1:
                    执行代码块 1
                    break;
                case 2:
                    执行代码块 2
                    break;
                default:
                    与 case 1 和 case 2 不同时执行的代码
            }
        */

        /*JS for/in循环遍历对象的属性
            var person={fname:"Bill",lname:"Gates",age:56}; 
            for (x in person) {         // x 为属性名
                txt=txt + person[x];
            }
        */

        /*JS 类型转换
            JS中有6种不同的数据类型：  string  number  boolean  object  function  symbol
                 3种对象类型：  Object  Date  Array
                 2个不包含任何值的数据类型：  null  undefined

                typeof "John"                 // 返回 string
                typeof 3.14                   // 返回 number
                typeof NaN                    // 返回 number
                typeof false                  // 返回 boolean
                typeof [1,2,3,4]              // 返回 object
                typeof {name:'John', age:34}  // 返回 object
                typeof new Date()             // 返回 object
                typeof function () {}         // 返回 function
                typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
                typeof null                   // 返回 object

            Number() 转换为数字， String() 转换为字符串， Boolean() 转换为布尔值
        */
        
        /*JS 正则表达式
            /正则表达式主体/修饰符(可选)，用于搜索替换字符串

            search()：
                var str = "Visit Runoob!"; 
                var n = str.search(/Runoob/i);      //结果为6，也可以str.search("Runoob");

            replace()：
                var txt = str.replace(/microsoft/i,"Runoob");   //不分大小写地查找str内的第一个microsoft，替换为Runoob并返回替换好的字符串给txt

            修饰符：
                i	执行对大小写不敏感的匹配
                g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
                m	执行多行匹配

            /[0-9]/g        全局，匹配数字
            /[a-zA-Z]/g     全局，匹配大小写字母
            /[^a-zA-Z]/g    全局，匹配非大小写字母
        */

    </script>
</body>

</html>`
};