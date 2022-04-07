<?php
    include_once("database.php");

    if($_POST['mode']=='view_data'){

         // Create database connection using config file
         include_once("database.php");
         $mysqli = new mysqli($servername, $username, $password, $dbname);
 
         $query ="SELECT * FROM Employee";
 
          
 
         $result=$mysqli->prepare($query);
         //execute query
 
         $result->bind_result($id,$name,$position);
         $result->execute();
 
         /* fetch values */
         while ($result->fetch()) {
             $Data[] = array(
                 'id'=> $id,
                 'name'=> $name,
                 'position'=> $position
                 
             );
         }
         echo json_encode($Data);
 
         //free memory associated with result
         $result->close();
 
         //close connection
         $mysqli->close();
 




    }
     
        
?>