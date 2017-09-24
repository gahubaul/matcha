<?php
        session_start();

        include "database.php";
        include "../php/explode.php";
        try {
		    $conn = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    } catch (PDOException $e) {
	        $i = 1;
	    }

        if ($conn == FALSE)
        {
            include "../php/create_database.php";
	        include "../php/create_table.php";
        }
        else if ($conn == TRUE)
        {
            $folder = "../save_img/";
            $dossier = opendir($folder);
            while ($fichier = readdir($dossier))
            {
                if ($fichier != "." && $fichier != "..")
                    unlink($folder.$fichier);
            }
            closedir($dossier);
            $folder = "../page/all/comment/save_com/";
            $dossier = opendir($folder);
            while ($fichier = readdir($dossier))
            {
                if ($fichier != "." && $fichier != "..")
                    unlink($folder.$fichier);
            }
            closedir($dossier);
            $statement = $conn->exec("DROP DATABASE " . $name_db);
            include "../php/create_database.php";
	        include "../php/create_table.php";
        }

?>