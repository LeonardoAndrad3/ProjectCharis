<?php

class ControlerDb{

    private $user = "nokzzaysxxaskq";
    private $password = "ff7e62c70dfa0d8ed742988ba7d279ec19af825eb268f33d35e2abb7cd007e37";
    private $host = "ec2-34-239-55-93.compute-1.amazonaws.com";
    private $database = "d9ib72bq2nigrh";
    private $conn;

    function connectDb(){
        $conn = pg_connect("host=$this->host dbname=$this->database user=$this->user password=$this->password") or
        die("Failed to create connection to database:". pg_last_erros(). "<br/>");      
    }

    function construct(){
        $this->conn = $this-connectDb();
    }




} 



?>