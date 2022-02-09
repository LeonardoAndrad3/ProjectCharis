<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charis</title>    
</head>
<body>
    <div class="main">
      <?php include("lib/components/header.php");include("lib/components/carrossel.php")?>

  
      <!-- Utilizando imagem do charis -->
      <?php include("lib/components/contentInicio.php");include("lib/components/footer.php")?>


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
  </script>
</body>
</html>