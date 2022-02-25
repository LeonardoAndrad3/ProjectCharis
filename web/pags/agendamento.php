<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/validarData.js"></script>
    <title>Agendamento</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
</head>
<body>
<div class="main">
        
    <div class="agendamento">
    <form class="formAgendamento" action="./lib/agendar.php" method="post">
    <h1> Faça seu agendamento </h1>  
    <div class="formMain"> 
      <div class="formInput">
        <input name="name" type="text" placeholder="Nome..." required>
        <input name="service" list="service"type="text" placeholder="Serviço..." required>
          <datalist id='service'>
            <option value="Corte"></option>
            <option value="pe e mao"></option>
            <option value="Escova"></option>
            <option value="Depilação"></option>
            <option value="Prancha"></option>
          </datalist>
        <input name="date" id="date" type="datetime-local" required>
        <input name="phone" type="text" placeholder="Telefone..." onkeypress="$(this).mask('(00) 9 0000-0000')" required>
        <input type="submit" value="Enviar">
      </div>
        <div class="linhaVertical"></div>
        <div class="formImg">
          <img class="iconAgenda" src="icon/iconAgenda.svg"> 
        </div>
      </div>
     
      
    </form>

   

    </div>
</body>
</html>