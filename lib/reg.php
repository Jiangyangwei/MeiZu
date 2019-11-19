<?php
    // 1. 连接数据库
    include('./conn.php');
    // 2. 接收数据
    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    // 3. 验证数据  判断用户名是否存在
    $sql = "select * from meizu where user_phone='$phone'";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows>0){
        // 数据库中有数据
        echo '{"msg":"该号码已存在"}';
        $mysqli->close();
        die;
    }

    $insertSql = "insert into meizu(user_phone,user_password,usr_email) values('$phone','$password','$email')";

    // 当使用query函数执行插入操作的时候  返回的是插入的行数
    $res = $mysqli->query($insertSql);

    if($res){
        echo '{"msg":"注册成功"}';
    }

    $mysqli->close();
?>