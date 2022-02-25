<?php
// include_once('include.php');

//     $pdo = new ControllerDB();
   
//     try{
//         $resp = $pdo->prepareSql('select * from agendamento order by id asc');
//         $resp->execute();

//         $html = "
//         <table style='text-align: center;' border=1 width=100% >
//         <thead style='background: yellow;'>
//         <tr>
//             <th>Confirmar</th>
//             <th>Name</th>
//             <th>Horario</th>
//             <th>Telefone</th>
//         </tr>
//         </thead> 
//         <tbody>";


//         foreach($resp->fetchAll(PDO::FETCH_ASSOC) as $key => $value){
//                 $arrAux[] = $value;
//                 $html .="<tr><td><input type='checkbox'><input type='checkbox'></td>";
//                 $html .= "<td>".$arrAux[$key]["name"]."</td>";
//                 $html .= "<td>".$arrAux[$key]["horario"]."</td>";
//                 $html .= "<td>".$arrAux[$key]["telefone"]."</td></tr>";
//         }

//         $html .= "</tbody></table>";

//         echo $html;

//     }catch(Exception $e){
//         echo $e;
//     }
    
?>