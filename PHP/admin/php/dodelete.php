<?php
    $del_id=$_GET["del_id"];
    $conn=new mysqli("localhost","root","root","mydata");
    if(!$conn->connect_error){
        $sql="delete from article where ac_id='$del_id'";
        if($conn->query($sql)){
            echo "<script>";
            echo "alert('删除成功！');";
            echo "history.go(-1);";
            echo "location.reload();";
            echo "</script>";
        }else{
            echo "删除失败！";
        };
    }
?>