<?php

class ControllerDb{

    // private $user = "nokzzaysxxaskq";
    // private $password = "ff7e62c70dfa0d8ed742988ba7d279ec19af825eb268f33d35e2abb7cd007e37";
    // private $host = "ec2-34-239-55-93.compute-1.amazonaws.com";
    // private $database = "d9ib72bq2nigrh";
    // private $conn;
    private $pdo;

    function __construct(){
        try{
            $this->pdo = new PDO("mysql:host=localhost;dbname=charis", "root", "");
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(Exception $e){
            echo $e;
        }
    }

    function prepareSql($sql){
        return $this->pdo->prepare($sql);
    }
} 



?>