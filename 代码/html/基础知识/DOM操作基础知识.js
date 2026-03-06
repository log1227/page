const codeSnippets_DOM操作基础知识 = {
    "DOM操作基础知识": `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
</head>

<body>
    


    <script>
        /*选择元素
            1.document.getElementById()：根据元素的 id 属性值来选择单个元素
            2.document.getElementsByTagName()：根据元素的标签名来选择一组元素，返回一个 HTMLCollection 对象
                如：    var paragraphs = document.getElementsByTagName('p');
                        // 遍历 HTMLCollection 对象
                        for (let i = 0; i < paragraphs.length; i++) {
                            // 对每个 p 标签添加样式
                            paragraphs[i].style.color = 'red';
                        }
            3.document.getElementsByClassName()：根据元素的类名来选择一组元素，返回一个 HTMLCollection 对象

        */

        /*修改元素
            var element = document.getElementById('myImage');

            1.修改元素内容
                innerHTML：会解析其中的标签
                    如：    element.innerHTML = '<p>新的 HTML 内容</p>';
                    会生成一个文本为新的 HTML 内容的p标签
                textContent：不会解析其中的标签
                    如：    element.textContent = '新的文本内容';

            2.修改元素属性
                如：element.setAttribute('alt', '新的图片描述');

            3.修改元素样式
                如：element.style.color = 'red';
                    element.style.fontSize = '20px';
            
            4.添加类
                element.className += ' new-class';

        */

        /*创建元素
            document.createElement()
            如：    var newElement = document.createElement('p');
                    newElement.textContent = '这是一个新创建的段落。';
        */

        /*添加元素
            1.appendChild()：将新元素添加到父元素的末尾
                如：    var parentElement = document.getElementById('parent');
                        parentElement.appendChild(newElement);
                把自己创建的newElement添加到了parentElement的末尾

            2.insertBefore()：将新元素插入到指定元素之前
                如：    var referenceElement = document.getElementById('reference');
                        parentElement.insertBefore(newElement, referenceElement);
            
            3.innerHTML += ：不推荐使用，会重新渲染整个父元素而不是添加子元素，会出现性能问题，还有绑定的事件监听可能失效

        */

        /*删除元素
            removeChild()
                如：    parentElement.removeChild(childElement);

            如果不知道父元素下面有哪些子元素，可以通过.children得到，比如：   thirdChild = parent.children[2];
            全部清空可以这样：
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }

        */

        /*事件处理
            .addEventListener
            例如：
                element.addEventListener('click', function () {
                    alert('按钮被点击了！');
                });
            除了click（单击），还有这些事件：
                dblclick（双击）    mouseover（指针移动到元素上时）     mouseout（指针移出元素时）
                mousedown（鼠标按下时触发）     mouseup（鼠标释放时触发）
        */


    </script>
</body>

</html>`
};