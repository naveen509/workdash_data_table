<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "workdash_data_table";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Create connection with database name
$conn = new mysqli($servername, $username, $password, $dbname);

set_time_limit(600);

if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully db !! <br><br>";

set_time_limit(600);


?>