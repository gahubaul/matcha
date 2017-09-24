<?php
	session_start();
	include "../config/database.php";
    include "explode.php";
    try {
		$conn = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch (PDOException $e)
	{
		$i = 2;
	}
	
	$users =  "CREATE TABLE `$DB_DSN`.`users` (
			`id` INT NOT NULL AUTO_INCREMENT ,
			`login` VARCHAR(255) NOT NULL , 
			`mdp` VARCHAR(255) NOT NULL ,
			`mail` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";

	try{
		$users = $conn-> exec($user);
	} catch (PDOException $e) {
		$i = 2;
	}
?>