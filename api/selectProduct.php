<?php
 $serverName = "localhost";
 $userName = "root";
 $passWord = "";
 $dbName = "Trading";

 $EndCode = file_get_contents('php://input');
 $DeCode  = json_decode($EndCode,true);
 
 $conn = new mysqli($serverName,$userName,$passWord,$dbName);
 if ($conn->connect_error) {
	   die("Connection Failed !!");
 }
 
 $pid = $DeCode['pid'];
// $pid = 'P001';

 $sql  = "Select * from  product where productid='$pid'";
 $result = $conn->query($sql);

 if ($result->num_rows > 0 ) 
 { 
    $row = $result->fetch_assoc();
    $pname = $row['productname'];
    $price = $row['price'];
    $qty   = $row['qty'];
 } 
 else 
 { 
    $pname = '';
    $price = '';
    $qty   = '';
 }
 
 $response[] = array("pid" => $pid,"pname" => $pname, "price" => $price, "qty" => $qty) ;
 echo json_encode($response);

    ?>