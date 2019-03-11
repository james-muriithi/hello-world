<?php
/* Local Database*/

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "helloworld";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
	//if it cannot connect to the db 
    die("Connection failed: " . mysqli_connect_error());
}



?>