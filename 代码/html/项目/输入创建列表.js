const codeSnippets_输入创建列表 = {
    "输入创建列表": `<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
    <style>
        .text_in{
            position: fixed;
            margin: 0;
            padding: 0;
            bottom: 0;

            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .text_input{
            margin: 10px;
        }
        .my_btn{
            margin: 10px;
        }
        .my_list{
            margin: auto;
            padding: auto;
            background-color: #e1e1e1;
        }
        .my_ul{
            overflow: hidden;
            list-style-type: none;
        }
        .listItem{
            float: left;
        }
    </style>
</head>

<body>
    <div class="text_in">
        <input type="text" class="text_input" id="text_input_id">
        <button class="my_btn" id="my_btn_id">提交</button>
    </div>
    <div class="my_list" id="my_list_id">
        <ul id="my_ul">

        </ul>
    </div>

    <script>
        var btn_1 = document.getElementById("my_btn_id");
        var click_times = 0;
        btn_1.addEventListener('click', function(){
            var text_input = document.getElementById("text_input_id").textContent;
            var list_div = document.getElementById("my_list_id");
            // while(list_div.firstChild){
            //     list_div.removeChild(list_div.firstChild)   //清空整个列表div
            // }
            var list_ul = document.getElementById("my_ul");
            list_ul.innerHTML += '<li class="listItem" id="listItem_' + click_times + '">' + text_input + '</li><buttom class="del_btn"></buttom><br>' 
            click_times ++ ;
        });

    </script>

</body>

</html> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
    <style>
        .text_in {
            position: fixed;
            margin: 0;
            padding: 0;
            bottom: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            /* 添加宽度为100%，确保输入框和按钮在底部居中 */
            background-color: #f0f0f0;
            /* 添加背景颜色，避免输入框和按钮被页面内容遮挡 */
        }

        .text_input {
            margin: 10px;
            padding: 8px;
            /* 添加内边距，使输入框更美观 */
            width: 200px;
            /* 设置输入框宽度 */
        }

        .my_btn {
            margin: 10px;
            padding: 8px 16px;
            /* 添加内边距，使按钮更美观 */
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .my_btn:hover {
            background-color: #0056b3;
            /* 添加悬停效果 */
        }

        .my_list {
            margin: 20px auto;
            /* 添加外边距，使列表居中 */
            padding: 0;
            width: 300px;
            /* 设置列表宽度 */
            background-color: #e1e1e1;
            border-radius: 4px;
            /* 添加圆角边框 */
        }

        .my_ul {
            overflow: hidden;
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .listItem {
            float: left;
            width: 100%;
            /* 设置每个列表项宽度为100%，确保每行只有一个列表项 */
            padding: 8px;
            margin: 5px 0;
            background-color: #ffffff;
            /* 添加背景颜色 */
            border-radius: 4px;
            /* 添加圆角边框 */
            display: flex;
            /* 使用Flexbox布局 */
            justify-content: space-between;
            /* 使内容和删除按钮分布在两端 */
            align-items: center;
            /* 垂直居中对齐 */
        }

        .del_btn {
            background-color: #ff0000;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 4px 8px;
            cursor: pointer;
        }

        .del_btn:hover {
            background-color: #cc0000;
            /* 添加悬停效果 */
        }
    </style>
</head>

<body>
    <div class="text_in">
        <input type="text" class="text_input" id="text_input_id" placeholder="请输入内容">
        <button class="my_btn" id="my_btn_id">提交</button>
    </div>
    <div class="my_list" id="my_list_id">
        <ul id="my_ul">
            <!-- 动态生成的列表项会插入到这里 -->
        </ul>
    </div>

    <script>
        var btn_1 = document.getElementById("my_btn_id");
        var click_times = 0;
        btn_1.addEventListener('click', function () {
            var text_input = document.getElementById("text_input_id").value.trim(); // 修正：使用value.trim()获取输入框的值并去除空格
            if (text_input === "") {
                alert("请输入内容"); // 修正：如果输入框为空，弹出提示
                return;
            }
            var list_ul = document.getElementById("my_ul");
            var list_item = document.createElement("li"); // 创建新的列表项
            list_item.className = "listItem"; // 添加类名
            list_item.id = "listItem_" + click_times; // 添加唯一的ID
            list_item.innerHTML = text_input + '<button class="del_btn" id="del_btn_' + click_times + '">删除</button>'; // 修正：将删除按钮的HTML代码添加到列表项中
            list_ul.appendChild(list_item); // 将列表项添加到<ul>中
            click_times++; // 点击次数加1
            document.getElementById("text_input_id").value = ""; // 清空输入框
        });

        // 修正：为删除按钮绑定点击事件
        document.getElementById("my_ul").addEventListener('click', function (e) {
            if (e.target.className === "del_btn") { // 如果点击的是删除按钮
                var list_item_id = e.target.id.split('_')[2]; // 获取对应的列表项ID
                var list_item = document.getElementById("listItem_" + list_item_id); // 获取对应的列表项
                list_item.remove(); // 删除列表项
            }
        });
    </script>
</body>

</html>`
};