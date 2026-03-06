const codeSnippets_HTML基础知识 = {
    "HTML基础知识": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HTML基础知识</title>
</head>
<!-- 
    注意:
    1.HTML的<>标签内的属性不需要;来分隔,而CSS需要
-->

<body>
    <!-- 文本元素 -->
        <!-- 标题 -->
            <!-- 粗体，浏览器会自动地在标题的前后添加空行（块级元素,独占一行，占满宽度） -->
            <h1>一级标题</h1>
            <h2>二级标题</h2>
            <h3>三级标题</h3>
            <h4>四级标题</h4>
            <h5>五级标题</h5>
            <h6>六级标题</h6>

        <!-- 段落 -->
            <!-- 浏览器会自动地在段落的前后添加空行（块级元素） -->
            <p>这是一个段落</p>

        <!-- 标签 -->
            <!-- 内联元素，不会独占一行，不占满宽度 -->
            <span>这个文本不会前后换行</span><span>可以存在多个标签</span><br>
            
        <!-- 链接 -->
            <!-- 默认蓝色下划线文本，不换行 -->
            <a href="https://www.runoob.com/html/html-links.html">HTML教程</a>  <br>

    <!-- 文本样式 -->
        <b>加粗文本</b>     <strong>加粗文本</strong>                   <br>
        <i>斜体文本</i>     <em>斜体文本</em>                           <br>
        <u>下划线文本</u> <ins>插入文本（也是下划线文本）</ins>           <br>
        <s>删除文本</s>     <del>删除文本</del>                         <br>
        <mark>突出显示文本，默认背景颜色为黄色</mark>                     <br>
        <small>小号文本</small>                                         <br>
        <code>代码文本</code>                                           <br>
        <p>这是     <sub>下标</sub>     和   <sup>上标</sup>   </p>     <br>

    <!-- 文本结构 -->
        <!-- 换行 -->
            <p>使用“<br>”进行文本换行</p>
            <!-- 使用&lt;和&gt;转义可以避免<br>解读为换行(详见更多字符实体) -->
            <p>这是一段包含 &lt;br&gt; 的文本，这里的 &lt;br&gt; 不会产生换行效果。</p>

        <!-- 空格 -->
            <p>这里有&nbsp;&nbsp;&nbsp;&nbsp;四个空格</p>

        <!-- 保留原格式 -->
            <!-- <pre> 标签用于定义预格式化的文本，标签内的文本会保留空格、换行符和制表符等原始格式 -->
            <pre>这里面的所有空格   ，换行

                都会保存
            </pre>

    <!-- 水平线 -->
        <hr>

    <!-- 图片 -->
        <!-- img也是内联元素，不换行 -->
        <!-- src表示图片的链接，alt属性为图片提供替代文本，当图片无法加载时显示 -->
        <!-- 绝对路径与相对路径：
            地绝对路径：如    C:\\Users\\Username\\Pictures\\local_image.jpg
            网络绝对路径：如    https://example.com/images/sample.jpg
            相对路径：../表示上级目录，/表示下级目录
        -->
        <img src="image.jpg" alt="描述性文字">
        <img src="../../../../图片/成片/猫/臭宝/DSC08106.png" style=" height: 500px; width: auto;">

    <!-- 列表 -->
        <!-- 无序列表，默认黑色圆点表头 -->
            <!-- ul:Unordered List    li:list item -->
            <ul>
                <li>苹果</li>
                <li>香蕉</li>
                <li>橙子</li>
            </ul>
        
        <!-- 有序列表 -->
            <!-- ol:ordered list -->
            <ol>
                <li>第一步</li>
                <li>第二步</li>
                <li>第三步</li>
            </ol>
        
        <!-- 自定义列表 -->
            <dl>
                <dt>dt为表项</dt>
                <dd>dd为解释，另起一行，包含缩进</dd>
            </dl>
        
        <!-- 嵌套列表 -->
            <!-- 无序列表的表头会默认区分不同层级，有序列表不会区分 -->
            <ul>
                <li>水果</li>
                <li>蔬菜
                    <ul>
                        <li>胡萝卜</li>
                        <li>西兰花</li>
                    </ul>
                </li>
                <li>坚果
                    <ol>
                        <ol>
                            <li>花生</li>
                            <li>夏威夷果</li>
                        </ol>
                        <li>杏仁</li>
                        <li>核桃</li>
                    </ol>
                </li>
            </ul>

    <!-- 表格 -->
        <!-- 表格分为表头thead和主体tbody，每行用tr(table row),行内元素用th或td表示
         -->
        <table>
            <thead>
                <tr>
                    <th>列标题1</th>
                    <th>列标题2</th>
                    <th>列标题3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>行1，列1</td>
                    <td>行1，列2</td>
                    <td>行1，列3</td>
                </tr>
                <tr>
                    <td>行2，列1</td>
                    <td>行2，列2</td>
                    <td>行2，列3</td>
                </tr>
            </tbody>
        </table>

    <hr>

    <!-- 表单 -->
        <!-- 表单的基本结构 -->
            <!-- 最简陋的写法，<input>表示一个表单元素（提交单元），根据type不同提交的数据也不同-->
            <form>
                text-文本输入框 <input type="text"><br>
                password-密码输入框 <input type="password"><br>
                radio-单选按钮<input type="radio"><br>
                checkbox-复选框<input type="checkbox"><br>
                submit-提交按钮<input type="submit">
            </form><hr>
            
            <!-- 表单元素前面的解释文字用上lable标签，for=""，<input>内加上id="",将解释文字和输入框绑定起来，点击输入文字的时候会聚焦到输入框内（是个好习惯） -->
            <form>
                <label for="text">文本输入框</label> <input type="text" id="text"><br>
                <!-- password类型的输入框输入字符时以圆点·或星号*代替 -->
                <label for="password">password-密码输入框</label> <input type="password" id="password"><br>
                <label for="radio">radio-单选按钮</label> <input type="radio" id="radio"><br>
                <label for="checkbox">checkbox-复选框</label> <input type="checkbox" id="checkbox"><br>
                <label for="submit">submit-提交按钮</label> <input type="submit" id="submit"><br>
                <!-- 特殊元素：下拉列表，由<select>和<option>组成 -->
                <label for="country">国家：</label>
                <select id="country">
                    <option value="cn">中国</option>
                    <option value="usa">美国</option>
                    <option value="uk">英国</option>
                </select><br>

            </form><hr>

        <!-- 表单的提交 -->
            <!-- 1.<form>的action和method属性:
                    action属性指定了表单数据提交的目标 URL。当用户点击表单中的提交按钮时，表单数据会被发送到 action 属性指定的服务器端脚本或页面进行处理
                    method属性定义了表单数据的提交方式,有get和post
                        get:将表单数据附加在 URL 的后面，以查询字符串的形式传递。例如，若表单中有一个名为 username 的输入框，用户输入 test，提交表单时 URL 可能会变成
                        http://example.com/submit?username=test
                        post 方法：将表单数据放在 HTTP 请求的消息体中进行传输，不会显示在 URL 上。因此，post 方法更安全，适合传递敏感信息（如密码）和大量数据
                 2.<input>的name属性:用于标识表单元素，在表单提交时，它作为键与用户输入的值组成键值对
                 3.<input>的required和checked属性:
                    required:不填不能提交
                    checked:不填的时候默认是这个
                 4.<input>的value属性:
                        在文本类型的<input>中表示不填写时的默认值
                        在选择按钮类型的<input>中表示该项提交时表示的值
                        在按钮类型的<input>表示按钮中的文字
                 5.单选按钮的唯一性:如果多个单选按钮有同一个name值,就只能选其中一个
                 6.表单的提交,根据action指定的URL和提交方式method,找到对应的后端路由,例如Flask:
                        @app.route('/submit', methods=['POST'])定义了一个路由，当表单以 POST 方法提交到 /submit 时，会执行对应的视图函数
            -->

            <form id="myForm">
                <label for="username">用户名：</label>
                <input type="text" id="username" name="username" value="log" required>
                <br>

                <label for="password">密码：</label>
                <input type="password" id="password" name="password" value="log" required>
                <br>

                <label>性别：</label>
                <input type="radio" id="male" name="gender" value="male">
                <label for="male">男</label>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">女</label>
                <br>

                <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" checked>
                <label for="subscribe">订阅推送信息</label>
                <br>

                <input type="radio" id="aaa" name="aaa" value="aaa">
                <label for="aaa">aaa和bbb不冲突</label>
                <input type="radio" id="bbb" name="bbb" value="bbb">
                <label for="bbb">aaa和bbb都可以选</label><br>

                <label for="country1">国家：</label>
                <select id="country1">
                    <!-- selected表示默认预选该项 -->
                    <option value="cn" selected>中国</option>
                    <option value="usa">美国</option>
                    <option value="uk">英国</option>
                </select><br>

                <input type="submit" value="宇宙无敌超级超级长,长的不能再长了的提交按钮">
            </form>

</body>
</html>`
};