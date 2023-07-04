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

$pilih = $DeCode['pilih'];

if ($pilih==1) InsertData();
if ($pilih==2) UpdateData();
if ($pilih==3) DeleteData();
if ($pilih==4) SelectAllData();
if ($pilih==5) SelectDataByCriteria();

function SelectDataByCriteria() {
    global $conn, $DeCode;

    $pid = $DeCode['pid'];
    // $pid = $_POST['pid'];

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
}

 function SelectAllData() {
    global $conn;
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
 }
 
 function DeleteData() {
    global $conn;

    $pid = $_POST['pid'];


    $sql  = "Delete from product where productid='$pid'";

    if ($conn->query($sql) === true) 
    { $pesan = "Delete Record successfully";} 
    else 
    { $pesan = $conn->error;}
    
    $response[] = array("Message" => $pesan) ;
    echo json_encode($response); 
 }
 function UpdateData() {
    global $conn;

    $pid = $_POST['pid'];
    $pnm = $_POST['pnm'];
    $prc = $_POST['prc'];
    $qty = $_POST['qty'];

    $sql  = "update product set 
                productname='$pnm',
                price='$prc',
                qty ='$qty'
                where productid='$pid'";

    if ($conn->query($sql) === true) 
    { $pesan = "Update Record successfully";} 
    else 
    { $pesan = $conn->error;}
    
    $response[] = array("Message" => $pesan) ;
    echo json_encode($response);    
 }
 function InsertData() {
    global $conn;

    // $pid = $DeCode['pid'];
    // $pnm = $DeCode['pnm'];
    // $prc = $DeCode['prc'];
    // $qty = $DeCode['qty'];
    
    $pid = $_POST['pid'];
    $pnm = $_POST['pnm'];
    $prc = $_POST['prc'];
    $qty = $_POST['qty'];

    $sql  = "Insert into product values ('$pid','$pnm','$prc','$qty')";
    if ($conn->query($sql) === true) 
    { $pesan = "New Record created successfully";} 
    else 
    { $pesan = $conn->error;}
    
    $response[] = array("Message" => $pesan) ;
    echo json_encode($response);
 }
 

 
 

?>