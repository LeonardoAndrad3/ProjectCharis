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
        <div id="carouselExampleCaptions2" class="carousel slide carouselTopSecond" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item perfil active">
              <img src="icon/cabeleireiro.jpg" class="d-block fundoPerfil w-100" alt="...">
              <div class="carouselCharisFirst">
                <img src="icon/ivana.jpg" class="d-block w-100" alt="...">
                <h5>Ivana Nascimento</h5>
                <p>cabeleireira/estética</p>
              </div>
            </div>
            <div class="carousel-item perfil textCarouselTop">
              <img src="icon/images.jpg" class="d-block fundoPerfil w-100" alt="...">
              <div class="carouselCharisFirst">
                <img src="icon/mari.jpg" class="d-block w-100" alt="...">
                <h5>Mariana Andrade</h5>
                <p>Manicure</p>
              </div>          
            </div>
            <div class="carousel-item perfil ">
              <img src="icon/papervitor.jpg" class="d-block fundoPerfil w-100" alt="...">
              <div class="carouselCharisFirst">
                <img src="icon/victor.jpg" class="d-block w-100" alt="...">
                  <h5>Victor Nascimento</h5>
                  <p>Barbeiro</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
          </button>
        </div>
            <section class="title1">
              <h1>Vamos retocar o visual?</h1>
              <p>Venha para o charis! Sua satisfação e nossa especialidade</p>
            </section>
            <section>
              <div id="carouselExampleIndicators" class="carousel slide carouselCharis" data-bs-interval="false">
                  <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="icon/f1.jpg" class="d-block fotoServico w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                      <img src="icon/f2.jpg" class="d-block fotoServico w-100" alt="...">
                  </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </section>
            <section class="title2">
                <h1>Cortes masculino!</h1>
                <div class="linha"></div>
            </section>
            <section class="masculino">
            <div id="carouselExampleIndicators2" class="carousel slide carouselCharis" data-bs-interval="false"> 
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="icon/m1.jpg" class="d-block fotoServico w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="icon/m2.jpg" class="d-block fotoServico w-100" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
              </div>
            </section>
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