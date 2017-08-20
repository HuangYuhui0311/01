<?php
    $showId="";
    $data="";
    if(!empty($_REQUEST["showId"])){
        $showId=$_REQUEST["showId"];
    }
    //echo $showId;
    $conn=new mysqli("localhost","root","root","mydata");
    if($conn->connect_error){
        die("数据库连接失败");
    }
    $sql="select * from article where ac_id=$showId";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            $data='{"ac_id":"'.$row["ac_id"].'","ac_title":"'.$row["ac_title"].'","ac_content":"'.str_replace('"',"'",$row["ac_content"]).'","ac_date":"'.$row["ac_date"].'"}';
        }
    }
    echo '['.$data.']';
    $conn->close();
?>