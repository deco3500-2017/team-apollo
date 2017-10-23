<?php

header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "d001beb963f57066";

// Create connection
$conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if ($_POST["buzz"]) {
  $jsonData = array();

  $sql = "SELECT * from ratings";

  $sqlResult = mysqli_query($conn, $sql);

  if ($sqlResult == false) {
        $jsonData["reply"] = "Failed SQL : " . $sql;
  } else {
    while ($row = $sqlResult->fetch_assoc()) {
      $jsonData[] = json_encode($row);
    }
  }

  echo json_encode($jsonData);
}

 ?>
