<?php

// session_start();

require "base_functions.php";

if(isset($_POST['user'], $_POST['pass'])) {
	
	$servername = "localhost";
	$username = "root";
	$password = "d001beb963f57066";
	
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");
	
	// Check connection
	if ($conn === false) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	
	//Prepare a statement to check that no one has already taken this username
	if (!$checkPass = $conn->prepare("SELECT username, password FROM users WHERE username = ?")){
		// Close the database connection.
		$conn->close();
		returnError(1, "Selection parameters are incorrect", $conn->connect_error);
	}
	
	// Bind the the activity elements to the SQL statement to sanitise input.
	if (!$checkPass->bind_param("s", $_POST['user'])){
		
		// Close the database connection.
		$conn->close();
		returnError(1, "MySQL Bind Failed", "Error occured while binding the parameters");
	}
	
	// Execute the SQL statement.
	$checkPass->execute();
	
	//store results
	$checkPass->bind_result($username, $password);
	
	while ($checkPass->fetch()) {
		// Verify the POST password against the password stored to authorise user.
		if (password_verify($_POST["pass"], $password)) {
			// Return a success message if the password is correct.
			$return = array("success"=> 1,
			"success_name"=>"Correct Password",
			"success_message"=>"The password for the current user is correct.");
			
			// Close the database connection.
			$conn->close();
			
			echo(json_encode($return));
			exit();
		} else {
			// Close the database connection.
			$conn->close();
			// Return an error mesage if the password is incorrect.
			returnError(9, "Invalid Password", "The password entered is invalid.");
		}
		// Close the database connection.
		$conn->close();
		returnError(2, "Invalid userID", "The account (".$_POST['user'].") does not exist.");
		// Forces the loop to only work once (even through there should only be one password returned)
		break;
	}
	// Close the database connection.
	$conn->close();
	returnError(2, "Invalid userID", "The account (".$_POST['user'].") does not exist.");

}

//     $result = mysqli_query($conn, $sql);
//
//
//    if($row = mysqli_fetch_assoc($result)) {
	//
	// 	   $_SESSION['username'] = $username;
	//
	// 	   if(isset($_SESSION['username'])){
		//
		// 	   echo "hello:{$_SESSION['username']}";
		//
		// 	   }
		//
		//
		//         echo "login";
		//
		//     }else{
			// 		echo "error";
			//
			// 	}
			//
			//
			//    }
			//
			//
			// //close connection
			// mysqli_close($conn);
			
			
			?>
			