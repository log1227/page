const codeSnippets_产品展示页 = {
    "产品展示页": `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
    <style>
        .displayArea{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .goods{
            background-color: #f0f0f0;
            border-radius: 8px;
            margin: 5px;
            padding: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            float:left;
        }
        .goods_name{
            text-align: center;
        }
        .goods_price{
            text-align: center;
        }
        .goods_check{
            color:white;
            background-color: #007bff;
            border-radius: 4px;
            border: 0;
            padding: 8px 16px;
        }
        .goods_check:hover{
            background-color: #0056b3;
        }
        .goods_img{
            width: 100%;
            height: auto;
            display: block;
            margin: auto;
        }

    </style>

</head>

<body>
    <h1 style="text-align: center;">产品展示页面</h1>
    <div class="displayArea">
        <div class="goods">
            <img src="https://picsum.photos/300/300" class="goods_img">
            <p class="goods_name">产品名称</p>
            <p class="goods_price">产品价格</p>
            <button class="goods_check">查看详情</button>
        </div>

        <div class="goods">
            <img src="https://picsum.photos/300/300" class="goods_img">
            <p class="goods_name">产品名称</p>
            <p class="goods_price">产品价格</p>
            <button class="goods_check">查看详情</button>
        </div>

        <div class="goods">
            <img src="https://picsum.photos/300/300" class="goods_img">
            <p class="goods_name">产品名称</p>
            <p class="goods_price">产品价格</p>
            <button class="goods_check">查看详情</button>
        </div>

        <div class="goods">
            <img src="https://picsum.photos/300/300" class="goods_img">
            <p class="goods_name">产品名称</p>
            <p class="goods_price">产品价格</p>
            <button class="goods_check">查看详情</button>
        </div>
    </div>

</body>

</html>`
};