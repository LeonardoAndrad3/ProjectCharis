<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charis</title>    
</head>
<body> 
    <?php include_once("lib/components/top.php")?>


    <div class="main">
      <!-- Utilizando imagem do charis -->
      <?php include_once("lib/components/contentInicio.php")?>

  <!-- modal -->
  <div id="desenvolvimento" class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Atenção</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Site em desenvolvimento!</p>
      </div>
    </div>
  </div>
</div>

  <script type="text/javascript">
      $(window).on('load', function(){
      $('#desenvolvimento').modal('show')
      })


      $(window).scroll(()=>{
        let scroll = $(window).scrollTop();        
        if(scroll >= 600){
            $("#topPage").fadeOut(500);
        } else{
          $("#topPage").fadeIn(500);
        }
      })
  </script>
</body>
</html>