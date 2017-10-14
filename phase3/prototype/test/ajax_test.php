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
$sql = "SELECT * FROM venues";
$result = mysqli_query($conn, $sql);
$all = mysqli_fetch_all($result);
echo json_encode($all);

//close connection 
mysqli_close($conn);


// if ($_POST["venues"] == "locations") {
  // $jsonData = array();
  // $sql = "SELECT * FROM venues";
  // $result = $conn->query($sql);
  	
  // if ($result->num_rows > 0) {
    // output data of each row
    // while($row = $result->fetch_assoc()) {
	  
      // $jsonData[] = json_encode($row);
         // echo "id: " . $row["venueID"]. " - Name: " . $row["venueName"] . "\n";
        // echo json_encode($jsonData);
        // echo "[" . implode(" , ", $jsonData) . "]";
		
    // }
    // echo json_encode($jsonData);
// } else {
    // echo "0 results";
// }
// }

 ?>
