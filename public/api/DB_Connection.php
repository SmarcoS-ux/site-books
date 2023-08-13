<?php
    abstract class DB_Connection{
        protected function conectDB(){
            try{
                $host = "localhost";
                $database = "books_db";
                $user = "root";
                $password = "";

                /*$Conn = new PDO("mysql:host=".$host.";dbname=".$database.";".$user.",".$password);*/
                $Conn = new PDO("mysql:host=localhost;dbname=books_db", $user, $password);
                $Conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                return $Conn;

            } catch(PDOException $error){
                echo $error->getMessage();
            }
        }
    }





?>