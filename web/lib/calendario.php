<DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/app.css"> 
</head>
<body>    
    <div class="calendario">
        <div class="semana">
        <div> Dom </div>
        <div> seg </div>
        <div> Ter </div>
        <div> Qua </div>
        <div> Qui </div>
        <div> Sex </div>
        <div> Sab </div>
        </div>

        <div class="dias">
        <?php

            $horarios = [];
            $dias = 1;
            $linhas = 0;
            $horarios = array(
                array(),
                array(),
                array(),
                array(),
                array(),
                array(),
            );

        for($p = 0; $p < 6; $p++){
            for($i = 0; $i < 7; $i++){
                $horarios[$linhas][$i] = $dias;
                echo "
                <div class='dias'><button>"
                .$horarios[$linhas][$i]
                ."</button></div>";

                $dias += 1;
            }
        echo"</div><div class='dias'>";
        $linhas += 1;
        }
        ?>
            </div>
        </div>
</body>
</html>