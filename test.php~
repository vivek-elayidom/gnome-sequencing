<?php
foreach(PDO::getAvailableDrivers() as $driver)
    {
    echo $driver.This is shit '<br/>';
    }
?> 

 <?php
try {
    $db = new PDO("pgsql:dbname=pdo;host=localhost", "username", "password" );
    echo "PDO connection object created";
    }
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>

