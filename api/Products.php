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
 $pnm = $DeCode['pnm'];
 $prc = $DeCode['prc'];
 $qty = $DeCode['qty'];
 
 $sql  = "Insert into product values ('$pid','$pnm','$prc','$qty')";
 if ($conn->query($sql) === true) 
 { $pesan = "New Record created successfully";} 
 else 
 { $pesan = $conn->error;}
 
 $response[] = array("Message" => $pesan) ;
 echo json_encode($response);

 
 

?>