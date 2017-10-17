<?php


session_start();



$servername = "localhost";
$username = "root";
$password = "d001beb963f57066";

// Create connection
$conn = mysqli_connect($servername, $username, $password, "venu", 3306, "/tmp/mysql.sock");

// Check connection
if ($conn === false) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

      if (isset($_POST['submit2']) && !empty($_POST['user2']) 
               && !empty($_POST['pass2'])) {
			
			$username = $_POST['user2'];
  			$password = md5($_POST['pass2']);
			
			$sql = "SELECT username,password FROM users WHERE username = '$username' AND password = '$password' ";
            $result = mysqli_query($conn, $sql);
			

   if($row = mysqli_fetch_assoc($result)) {
	   
	   $_SESSION['username'] = $username;
	   
	   if(isset($_SESSION['username'])){
	   
	   echo "hello:{$_SESSION['username']}";
	   
	   } 
	    
	    
        echo "login";
		
    }else{
		echo "error";
		
	}
	            
             
   }
  

//close connection 
mysqli_close($conn);


 ?>