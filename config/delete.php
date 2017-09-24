<?php
	include "database.php";
    include "../php/explode.php";
    try {
		$conn = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->exec("DROP DATABASE IF EXISTS $name_db");
	}
    catch (PDOException $e)
    {
        die("DB ERROR: ". $e->getMessage());
    }
?>