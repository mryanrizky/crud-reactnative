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
 
 $sql  = "Select * from  product";
 $result = $conn->query($sql);

    while($row = $result->fetch_assoc())
    {
        $response[] = array(
            'pid'   => $row['productid'],
            'pname' => $row['productname'],
            'price' => $row['price'],
            'qty'   => $row['qty']
        ) ;
    }
    
 echo json_encode($response);
 ?>