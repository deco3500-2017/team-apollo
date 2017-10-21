<?php

require "base_functions.php";

if(isset($_POST['user'], $_POST['pass'])) {

//   $return = array("success" => "got stuff");
//   echo json_encode($return);
// }

  $servername = "localhost";
  $username = "root";
  $password = "d001beb963f57066";

  // Create connection
  $conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");

  // Check connection
  if ($conn === false) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $userName = $_POST['user'];
  $passwordHash = password_hash($_POST['pass'], PASSWORD_DEFAULT);

  //Prepare a statement to check that no one has already taken this username
  if (!$checkID = $conn->prepare("SELECT * FROM users WHERE username = ?")){
    // Close the database connection.
    $conn->close();
    returnError(1, "Selection parameters are incorrect", $conn->connect_error);
  }

  // Bind the the activity elements to the SQL statement to sanitise input.
  if (!$checkID->bind_param("s", $_POST['user'])){
    // Close the database connection.
    $conn->close();
    returnError(1, "MySQL Bind Failed", "Error occured while binding the parameters");
  }

  // Execute the SQL statement.
  if (!$checkID->execute()){
    // Close the database connection.
    $conn->close();
    returnError(1, "Execution Unsuccessful", "Execution failed: (" . $checkID->errno . ") " . $checkID->error . " User");
  } else {
    /* store result */
    $checkID->store_result();
  }

  //If there are any results for the previous query then this username is taken.
  if ($checkID->num_rows > 0) {
    $conn->close();
    returnError(1, "USER duplicate username", "Error: The given username already exists in the database.");
  } else {

    //username not taken. Free to continue with registration.
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");

    if(!$stmt) {
      // Close the database connection.
      $conn->close();
      returnError(1, "Failed to prepare SQL statement.", mysqli_error($conn));
    }

    // Bind the USERID to the SQL statement to sanitise input.
    if(!$stmt->bind_param("ss", $_POST["user"], $passwordHash)) {
      // Close the database connection.
      $conn->close();
      returnError(1, "Failed to bind variables to SQL statement.", mysqli_error($conn));
    }

    // Execute the SQL statement.
    if(!$stmt->execute()) {
      // Close the database connection.
      $conn->close();
      returnError(1, "Failed to execute SQL statement.", mysqli_error($conn));
    }

    //Success
    // Close the database connection.
    $conn->close();
    returnSimpleSuccess("1", "User Registered", "The user with userID (" . $_POST["user"] . ") has been registered.");
  }
}
?>
