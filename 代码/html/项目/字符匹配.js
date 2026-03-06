const codeSnippets_字符匹配 = {
    "字符匹配": `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的网页</title>
</head>

<body>


    <script>
        var my_str = "e123452a203d34f78v687ds76a786fw789t809h87g89f56d89s67f89g09h78g890f789d789g80n89sd76";
        var my_str_noletter = my_str.replace( /[^0-9]/g, ".");
        var my_result = my_str_noletter.split(".");
        var the_max = 0;
        for(var i = 0; i < my_result.length; i ++ ){
            if(my_result[i]){
                if(Number(my_result[i]) > the_max){
                    the_max = my_result[i];
                }
            }
        }
        console.log("最大的数字是" + the_max);
    </script>
</body>

</html>`
};