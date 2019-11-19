<?php
    // 1. 连接数据库
    include('./conn.php');
    // 2. 接收数据
    $dephone = $_REQUEST['dephone'];
    $keywords = $_REQUEST['keywords'];
   
    // 3. 验证数据  判断用户名是否存在
    $sql = "select * from meizu where user_phone='$dephone' and user_password='$keywords'";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows>0){
        // 数据库中有数据
        echo '{"msg":"登录成功"}';
      
    }else{
        echo'{"msg":"登录失败"}';
    }

   

    $mysqli->close();
?>