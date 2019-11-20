<?php
    header('Access-Control-Allow-Origin:*');
    //连接数据库
    include('./conn.php');
    
    $sql = "select * from `meizu.detail`";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>