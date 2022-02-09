<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendamento</title>
</head>
<body>
<div class="main">
    <?php include("lib/components/header.php")?>
        
    <div class="agendamento">

    <h1>Horários:</h1> 

    <?php include("lib/components/calendario.php");echo("</br>")?>

    <h1> Faça seu agendamento </h1>  
    <form class="formAgendamento" method="get">
      <div class="formInput">
        <input type="text" placeholder="Nome...">
        <input type="datetime-local">
        <input type="email" placeholder="Email..."> 
  
      </div>
      <input type="submit" value="Enviar">
    </form>

    </div>
    <?php include("lib/components/footer.php")?>
</body>
</html>