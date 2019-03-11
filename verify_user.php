 <?php
 //this makes the conn variable in connect.php available in this file too
include 'connect.php';
if (isset($_POST['formData']) && !empty($_POST['formData'])) {
	//this is a php function (parse_str) that converts the 
	//form serialzed data eg. email=muriithijames123%40gmail.com&password=6yyyK0
	//to an array like array('email'=>'muriithijames123@gmail.com','password'=>'6yyyk0')
	// and assigns it to the variable(array) $formData
	parse_str($_POST['formData'],$formData);
	//extract function removes all the elements in the array 
	//eg. it will remove the array as $email = muriithijames123@gmail.com and $password = 6yyyk0
	extract($formData);
	//sql statement, and take note of how  
	$sql = "SELECT * FROM `student` WHERE email='$email' AND password='$password' ";
	//execute the query and assign the result to an array variable
	//the function takes 2 parameters 
	//1. the connection from connection.php and the sql query
	$result = mysqli_query($conn,$sql);
	//this method returns the number of results returned in the array
	$count = mysqli_num_rows($result);
	if ($count == 1) {
		//if the email and password are correct
		echo "success";//concatenation in php uses a dot
	}else{
		//if the details are not correct
		echo "Please Put Correct details";
	}
}


 ?>