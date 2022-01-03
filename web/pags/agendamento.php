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
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="?">Charis</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Charis</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="?">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="?pagina=agendamento">Agendamento</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="?pagina=blog">Blog</a>
                </li>
                <li class="nav-item">
                   <button type="button" onclick="window.location.href='?pagina=login'" class="btn btn-secondary">Login</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        
    <div class="agendamento">

    <h1>Horários:</h1>


    </div>


      <div class="rodape">
      <footer>
            <div class="redeSocial">
            <a href="https://www.facebook.com/chariscabeloeestetica"><img class="iconFace" src="icon/facebook-f-logo-2019.png" alt="img"></a>
            <a href="https://www.instagram.com/chariscabeloeestetica/"><img class="iconInsta" src="icon/instagram.png" alt="img"></a>
            <a href="https://wa.me/55011964824193"><img class="iconZap" src="icon/whatsapp.png" alt="img"></a>
            </div>
            <ul class="rod">
              </br>
              <li><p class="copy">Copyright © 2021 Charis</p></li>
              <li><a class="link-rodape" href="">Termos e condições</a></li>
              </br>     
              <li><p>Rua Romualdo de Sousa Brito, 403</p></li>
            </ul>        
            <section class="conteudo-localizacao">
              <iframe
                width="250"
                height="250"
                loading="lazy"
                allowfullscreen
                class="maps"
                src="">
              </iframe> 
            </section>
          </div>
        </footer>
      </div>
    </div>

    <script type="text/javascript" src="js/localiza.js"></script>
</body>
</html>