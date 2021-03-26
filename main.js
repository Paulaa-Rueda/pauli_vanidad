(function() {
  'use strict';

  // 1. Llamamos los elementos del DOM a utilizar mediante su id
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');

  // 2. Creamos una función/componente para el Header y otro para el Footer que sólo nos retorne todo el HTML que debe llevar, nos apoyamos del uso de las "plantillas" de Javascript con acentos invertidos ´´
  const HeaderComponent = () => {
    return `<div style="width: 100%;" align="center">
            <img class="logo" src="./img/logo.png" class="img-fluid" alt="logo" />
          </div>
          <!-- 4.6 -->
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-3 mb-5">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item px-4">
                  <a class="nav-link active" href="index.html">
                    <img src="https://img.icons8.com/small/16/000000/home.png" style="width: 20px; height: 20px;"/>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item px-4">
                  <a class="nav-link" href="tienda.html">Tienda</a>
                </li>
                <li class="nav-item px-4">
                  <a class="nav-link" href="catalogo.html">Catálogo</a>
                </li>
                <li class="nav-item px-4">
                  <a class="nav-link" href="promociones.html">Promociones</a>
                </li>
                <li class="nav-item px-4">
                  <a class="nav-link" href="mayoristas.html">Mayoristas</a>
                </li>
                <li class="nav-item px-4">
                  <a class="nav-link" href="preguntas.html">Preguntas</a>
                </li>
                <li class="nav-item px-4">
                  <a class="nav-link" href="contacto.html">Contáctanos</a>
                </li>
              </ul>
            </div>
          </nav>`;
  }

  const FooterComponent = () => {
    return `<div class="container py-5 mt-5">
            <div class="row">
              <div class="col">
                <h1>Información</h1>
                <p> <u>Somos una tienda virtual</u></p>
                <ul>
                    <li>¿Cómo Comprar?</li>
                    <li>Emprende con Nosotros</li>
                    <li>Preguntas Frecuentes</li>
                    <li>Envíos</li>
                    <li>Garantías</li>
                </ul>
              </div>
              <div class="col">
                <h1>Redes Sociales</h1>
                  <ul>
                    <li>
                      <img src="https://img.icons8.com/bubbles/50/000000/facebook.png"/>
                      <label> Síguenos en Facebook <br> <a href="https://www.facebook.com/pauli_vanidad_-105518554930594"target="_blank">@pauli_vanidad_</a> </label>
                    </li>
                    <li>
                      <img src="https://img.icons8.com/bubbles/50/000000/instagram-new.png"/>
                      <label> Síguenos en Instagram <br> <a href="https://www.instagram.com/pauli_vanidad_/?hl=es-la" target="_blank">@pauli_vanidad_</a></label>
                    </li>
                 </ul>
              </div>

              <div class="col">
                <h1>Contacto</h1>
                <!-- hacer una lista  -->
                <ul>
                  <li>
                    <img src="https://img.icons8.com/bubbles/50/000000/phone-office.png"/>
                    <label> Teléfono <br> 01-8000-252-42 </label>
                  </li>

                  <li>
                    <img src="https://img.icons8.com/bubbles/50/000000/whatsapp.png"/>
                    <label> Whatsapp <br> +57 524 145 251</label>
                  </li>
                  <li>
                    <img src="https://img.icons8.com/bubbles/50/000000/important-mail.png"/>
                    <label> Correo <br> contacto@paulivanidad.com</label>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div class="container-footer pb-5">


              <div class="information">
                <a href="">Información Compañía</a> | <a href="">
                Privación y Política </a> | <a href="">
                Términos y Condiciones</a>
              </div>

              <div class="copyright">
                <img src="https://img.icons8.com/small/16/000000/copyright.png"/>
                <label> 2021 Todos los Derechos Reservados | <strong>Pauli Vanidad</strong>
              </div>

          </div>`;
  }

  // 3. Montamos los componentes en sus respectivos elementos del dom que encuentre con el id correspondiente, nos apoyamos del uso de innerHTML, lo que cambia todo el interior de las etiquetas ejemplo: <etiqueta>innerHTML</etiqueta>
  header.innerHTML = HeaderComponent();
  console.log('Header listo! 🧢');

  footer.innerHTML = FooterComponent();
  console.log('Footer listo! 🥾');

}());
