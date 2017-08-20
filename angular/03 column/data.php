<?php
    $data="";
    $conn=new mysqli("localhost","root","root","mydata");
    if($conn->connect_error){
        die("数据库连接失败");
    }
    $sql="select * from article";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            if($data==""){
                $data='{"ac_thum":"'.$row["ac_thum"].'","ac_title":"'.$row["ac_title"].'","ac_describe":"'.$row["ac_describe"].'","ac_date":"'.$row["ac_date"].'","ac_column":"'.$row["ac_column"].'"}';
            }else{
                $data.=',{"ac_thum":"'.$row["ac_thum"].'","ac_title":"'.$row["ac_title"].'","ac_describe":"'.$row["ac_describe"].'","ac_date":"'.$row["ac_date"].'","ac_column":"'.$row["ac_column"].'"}';
            }
        }
    }
    echo '['.$data.']';
    $conn->close();
?>