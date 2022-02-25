<?php
// include_once("include.php");
// $pdo = new ControllerDB();

//     try{
//         if($_POST){

//             $clock = $_POST['date'];
//             $timeService = "02:00:00";
//             $h = strtotime($clock);
//             $hS = strtotime($timeService);
//             $hours = date('H', $hS);

//             $temp = strtotime("+$hours hours", $h);
//             $tempEnd = date('Y-m-d H:i:s', $temp);
//             $tempStart = date('Y-m-d H:i:s', $h);
               
//             // test require 
//             // SELECT * FROM `horarioLivre` inner join service on service.name=horarioLivre.service  
//             // WHERE horarioLivre.service = 'pe e mao'
//             // and horarioLivre.tempStart <= '2022-02-28 14:10:00' 
//             // and horarioLivre.tempEnd <= '2022-02-28 15:00:00'
//             // and horarioLivre.tempEnd >= '2022-02-28 15:00:00'


//             $clockFree = $pdo->prepareSql("SELECT * FROM `horarioLivre` inner join service on service.name=horarioLivre.service  WHERE  horarioLivre.service = :service and horarioLivre.horarios = '$temp' ");
//             $clockFree->bindParam(':service', $_POST['service']);
//             $clockFree->execute();
          
//             if($clockFree->rowCount() == 0){
//                 $resp = $pdo->prepareSql("insert into horarioLivre(horarios, service) values('$temp', :service)");
//                 $resp->bindParam(':service', $_POST['service']);
//                 $resp->execute(); 
//             }

//             $resp = $pdo->prepareSql('insert into agendamento(name, horario, telefone, service) values(:name,:date,:phone,:service)');
//             $resp->execute(array(
//                 ':name'=>$_POST['name'],
//                 ':date'=>$_POST['date'],
//                 ':phone'=>$_POST['phone'],
//                 ':service'=>$_POST['service']
//             ));

//             echo $resp->rowCount();
//         }
    
//     }catch(Exception $e){
//         echo $e;
//         die;
//     }

  


     

?>