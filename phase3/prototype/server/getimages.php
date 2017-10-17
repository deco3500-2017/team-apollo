<?php
$servername = "localhost";
$username = "root";
$password = "d001beb963f57066";

// Create connection
$conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");

// Check connection
if ($conn === false) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//query from database
$sql = "SELECT * FROM venueImages";
$result = mysqli_query($conn, $sql);
$all = mysqli_fetch_all($result);
echo json_encode($all);

//close connection 
mysqli_close($conn);


 ?>