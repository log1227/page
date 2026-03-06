const codeSnippets_顶部导航条 = {
    "顶部导航条": `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
    <style>
        .my_ul {
            position: fixed;
            margin: 0;
            padding: 0;
            top: 0;
            left: 0;
            width: 100%;
            list-style-type: none;
            overflow: hidden;
            background-color: #003366;
        }

        .my_li {
            float: left;
        }

        .my_a {
            display: block;
            padding: 10px;
            color: #ffffff;
            text-decoration: none;
        }

        .my_a:hover {
            background-color: #0066cc;
        }
    </style>

</head>

<body>
    <ul class="my_ul">
        <li class="my_li"><a class="my_a" href="#">首页</a></li>
        <li class="my_li"><a class="my_a" href="#">产品</a></li>
        <li class="my_li"><a class="my_a" href="#">服务</a></li>
        <li class="my_li"><a class="my_a" href="#">关于我们</a></li>
        <li class="my_li" style="float: right;"><a class="my_a" href="#">联系我们</a></li>
    </ul>

</body>

</html>`
};