<?php
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
  $jsonResponse = array();

  // $jsonResponse["reply"] = "Thanks for " . $_POST["buzz"]["id"];

  // echo json_encode($jsonResponse);

  $sql = "INSERT INTO ratings (userID, venueID, microphoneReading, accelerometer) VALUES(" . $_POST["buzz"]["id"] . "," . $_POST["buzz"]["venue"] . "," . $_POST["buzz"]["audio"] . "," . $_POST["buzz"]["accelerometer"] . ") ON DUPLICATE KEY UPDATE userID = "
  . $_POST["buzz"]["id"] . ", venueID = " . $_POST["buzz"]["venue"] . ", microphoneReading = " . $_POST["buzz"]["audio"] . ", accelerometer = " . $_POST["buzz"]["accelerometer"];

  $sqlResult = mysqli_query($conn, $sql);

  if ($sqlResult == false) {
        $jsonResponse["reply"] = "Failed SQL : " . $sql;
  } else {
    $jsonResponse["reply"] = $sqlResult;
  }

  echo json_encode($jsonResponse);


  // echo "Thanks for " .
  //
  // $sql = "SELECT * FROM venues";
  // $result = $conn->query($sql);
  // if ($result->num_rows > 0) {
  //   // output data of each row
  //   while($row = $result->fetch_assoc()) {
  //     $jsonData[] = json_encode($row);
  //       // echo "id: " . $row["venueID"]. " - Name: " . $row["venueName"] . "\n";
  //       // echo json_encode($jsonData);
  //       // echo "[" . implode(" , ", $jsonData) . "]";
  //   }
  //   echo json_encode($jsonData);
}

 ?>
