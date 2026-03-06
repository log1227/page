const codeSnippets_CSS基础知识HTML = {
    "CSS基础知识HTML": `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 此处引入外部样式表来分开HTML和css,其中rel表示这个<link>链接的资源是一个样式表,href=是文件路径 -->
    <link rel="stylesheet" href="CSS基础知识.css">
    <title>CSS基础知识</title>

    <style>
        #asd{
            /* 通过id为HTML元素绑定样式,注意ID属性不要以数字开头,id只能绑定一个元素 */
            font-size: 20px;
            color: red;
        }
        .aaa
        {
            /* 通过class为HTML元素绑定样式,可以绑定一类,类名不要数字开头 */
            text-align:center;
        }
        p.abc{
            /* 这里的p.规定了作用域,只能作用于p标签,如果没有规定作用域就是整个html */
            color: blue;
        }

        /* 链接状态样式 */
        .linkcss:link{
            /* 未访问链接 */
            color: red;
            text-decoration:none;
        }
        .linkcss:visited{
            /* 已访问链接 */
            color: blue;
            text-decoration:line-through;
        }
        .linkcss:hover{
            /* 鼠标移动到链接上 */
            color: yellowgreen;
            text-decoration: underline;
        }
        .linkcss:active{
            /* 鼠标点击时 */
            color: blanchedalmond;
            text-decoration:overline;
        }
    </style>
</head>

<body>
    <!-- CSS的id和class:要在HTML元素中设置CSS样式，你需要在元素中设置"id"和"class"选择器 -->
    <p id="asd">这是通过id为元素绑定样式</p>
    <p class="aaa">这是通过class为元素绑定样式</p>
    <p class="abc">只作用于p标签的class样式</p>

    <!-- 内联样式,内部样式表,外部样式表 -->
    <p style="color: rgb(200,200,50); text-align: center;">少量样式可以用style属性(也就是内联样式)</p>
    <p class="abc">这是用了内部样式表,也就是&lt;head&gt里面的style</p>
    <p class="waibu">这使用了外部样式表</p>
    <p class="waibu" class="abc" style="text-align: right; font-size: 15px;">如果发生冲突,优先级:内联样式>内部样式表>外部样式表</p>

    <!-- CSS的id和class -->
    <p id="asd">这是通过id为元素绑定样式</p>
    <p class="aaa">这是通过class为元素绑定样式</p>
    <p class="abc">只作用于p标签的class样式</p>
    
    <!-- 内联样式, 内部样式表, 外部样式表 -->
    <p style="color: rgb(200,200,50); text-align: center;">少量样式可以用style属性(内联样式)</p>
    <p class="abc">这是用了内部样式表</p>
    <p class="waibu">这使用了外部样式表</p>
    <p class="waibu" class="abc" style="text-align: right; font-size: 15px;">如果发生冲突,优先级:内联样式>内部样式表>外部样式表</p><hr>

    <!-- ---------------------------------------------------------------------------- -->
    
    <!-- CSS背景 -->
    <div style="background-color: #ff0000;">
        <p>背景颜色</p>
    </div>
    <div style="background-image: url('DSC06717.png'); background-size: contain; background-repeat: no-repeat; width: 80%; height: 200px; color: #ff0000;">
        <p>背景图片</p>
        <p>div中的color表示div中的字体颜色都是红色的</p>
    </div>
    
    <!-- CSS文本 -->
    <div>
        <p style="color: blue;">字体颜色</p>
        <p style="text-align:center;">文本对齐</p>
        <a href="https://www.runoob.com/css/css-text.html" style="text-decoration: none;">文本修饰改为none可以清除修饰(比如下划线)</a>

        <!-- 全部大写 -->
        <p style="text-transform:uppercase;">This is some text.</p>
        <!-- 全部小写 -->
        <p style="text-transform:lowercase;">This is some text.</p>
        <!-- 单词首字母大写 -->
        <p style="text-transform:capitalize;">This is some text.</p>

        <h1 style="text-decoration:overline;">上划线</h1>
        <h2 style="text-decoration:line-through;">删除线</h2>
        <h3 style="text-decoration:underline;">下划线</h3>

        <p style="text-indent:150px;">缩进</p>
        <p style="font-size: 50px;">字体大小</p>
    </div>

    <!-- 链接状态样式 -->
     <a href="#" class="linkcss">链接状态样式</a>
    
    <!-- css盒子模型 -->
    <div style="height: 400px; width: 400px; margin: 25px; outline-style: dashed; border: 5px solid green; padding: 10px;">
        <p>margin:外边距</p>
        <p>outline:轮廓(介于边框和外边距之间)</p>
        <p>Border:边框</p>
        <p>Padding:内边距</p>
        <p>Content:内容</p>
        <pre style="font-size: 140%;">注意,html和body默认有外边距内边距,可以:
            htlm,body{
                margin: 0;
                padding: 0;
            }
            这样消除
        </pre>
    </div>

    <!-- css尺寸 -->
    <!-- height    width    max-height    min-height    max-width    min-width    line-height
         可以用像素值，百分比作为单位，但是使用百分比作为单位时其父容器必须有固定宽度（高度），默认情况下html和其子容器body的width和height的属性为auto，在body中的容器使用百分比定义宽度与高度时需要给html和body设置固定宽度高度或100%宽度高度
    -->
    <div style="height: 300px; width: 300px; background-color: #ff0000; padding-top: 1px;">
        <div style="height: 25%; width: 45%; background-color: blue; margin-top: 10%; margin-left: 10%;">
            <p style="color: aliceblue;">如果不设置父容器的内边距,父子容器上外边距相接,会折叠在一起算一个外边距</p>
        </div>
    </div>

    <!-- css显示 -->
    <h2>这是一个可见标题</h2>
    <h1 style="visibility:hidden;">这是一个隐藏标题但是仍然占据空间</h1>
    <hr>
    <h1 style="display: none;">这也是隐藏标题，但不占据空间</h1>
    <hr>
    <p style="display: inline;">块级元素变成了内联元素</p>
    <p style="display: inline;">块级元素变成了内联元素</p>
    <hr>
    <span style="display: block;">内联元素变成了块级元素</span>
    <span style="display: block;">但是不允许有内部嵌套块元素</span>

    <!-- css定位 -->
        <!-- position属性有五个值:static，fixed，relative，absolute，sticky
                1.static：HTML 元素的默认值，即没有定位，遵循正常的文档流对象，元素不会受到 top, bottom, left, right影响
                2.fixed：元素的位置相对于浏览器窗口固定，即使窗口是滚动的它也不会移动，不占据实体空间
                3.relative：按照元素的原始位置对该元素进行移动，但原本所占的空间不会改变（实体所占空间不变，显示效果位移）
                4.absolute：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>，不占据实体空间
                5.sticky:粘性定位，依赖于用户的滚动在relative和fixed之间切换，当页面滚动超出目标区域时fixed，要加上阈值，比如top:10px;表示距离父元素上端10px时fixed
            重叠元素可以设置z-index来规定上下层关系（数值为整数，正负数都可以）
        -->
    <!-- css Overflow -->
        <!-- 用于控制内容溢出元素框时显示的方式，visible，hidden，scroll，auto，inherit
                1.visible：默认值，溢出内容不会被修剪，会呈现在元素框之外
                2.hidden：溢出内容会被修剪，且其余内容不可见
                3.scroll：溢出内容会被修剪，不管有没有溢出都有滚动条
                4.auto：溢出内容会被修剪，只有溢出时才有滚动条
                5.inherit：规定应该从父元素继承 overflow 属性的值
        -->
    <!-- css Float -->
        <!-- 只能向左或向右浮动，浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
             浮动元素之后的元素将围绕它，之前的元素不受影响。如果图像浮动，下面的文本流将环绕在它周围
             几个浮动的元素放到一起，如果有空间的话，它们将彼此相邻
             float之后元素脱离正常文档流，如果有父元素，float的子元素无法撑开父元素
             clear属性指定元素两侧不能出现浮动元素，可以清除前面元素的浮动影响，有 left,right,both等值
        -->
    <!-- css 对齐 -->
        <!-- 1.水平居中：
                    元素margin: auto（图片可以放入div中，对图片margin: auto）
                    文本text-align: center;
             2.垂直居中：
                    用padding
             3.左右对齐：
                    position: absolute 配合 left:0px 或 right: 0px 完成
                    float： left 或 float: right 方式完成，同时使用overflow: auto来避免溢出
        -->

    <!-- css 高度塌陷问题（子元素无法撑起父元素） -->
    <!-- 1. 浮动元素（float属性）
            子元素float时，子元素会脱离正常的文档流，父元素在计算自身高度时不会考虑这些浮动子元素，从而导致高度塌陷
          2. 绝对定位元素（position: absolute）
            使用 position: absolute 定位的子元素会脱离文档流，父元素同样无法感知到这些元素的高度，进而造成高度塌陷
          3. 固定定位元素（position: fixed）
          解决方法：
                父元素使用 overflow 属性触发 BFC，会将浮动子元素的高度计算在内
                在浮动元素的后面添加一个空的块级元素，并设置其 clear 属性为 both
    -->



</body>

</html>
    `};