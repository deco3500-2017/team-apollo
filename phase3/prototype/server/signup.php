<?php
if(isset($_POST['submit'])) {
$servername = "localhost";
$username = "root";
$password = "d001beb963f57066";

// Create connection
$conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");

// Check connection
if ($conn === false) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "SELECT MAX(userID) FROM users";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);

$userID = (int)$row[0];
$userID = (int)$userID+1;
//echo $userID;

			$userName = $_POST['user']; 
 
	$password = md5($_POST['pass']); 
	$sql = "INSERT INTO users (userID,username,password) VALUES ('$userID','$userName','$password')"; 
    
	$result = mysqli_query($conn, $sql);
	if($result){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
		





//close connection 
mysqli_close($conn);

}
 ?>