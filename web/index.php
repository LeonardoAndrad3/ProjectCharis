<?php include_once('lib/include.php');?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css/app.css">
    
    <title>Charis</title>
  </head>
  <body>
        <?php
            $url = (isset($_GET['pagina'])) ? $_GET['pagina'] : 'inicio';
            $dir = 'pags/';
            $ext = '.php';

            if(file_exists($dir.$url.$ext)){
                include($dir.$url.$ext);
            } else{
                echo '<div class="alert alert-danger" role="alert"> Página não encontrada</div>';
            }
        ?>

  </body>
</html>