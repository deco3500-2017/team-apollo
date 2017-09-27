<?php
$servername = "localhost";
$username = "root";
$password = "d001beb963f57066";

// Create connection
$conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
} else {
  echo "Connected to database successfully";
}

if ($_POST["name"]) {
  echo "Hello " . $_POST["name"] . "\n";
  $sql = "SELECT * FROM venues";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["venueID"]. " - Name: " . $row["venueName"] . "\n";
    }
} else {
    echo "0 results";
}
}

 ?>
