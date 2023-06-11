import Image from 'next/image'

export default function Home() {
  return (

<div>
<header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">Desafio 75 Hard</a></h1>

	  <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Início</a></li>
          <li><a className="nav-link scrollto" href="informacoes-gerais.html">Informações gerais</a></li>
          <li><a className="nav-link scrollto" href="perguntas-frequentes.html">Perguntas frequentes</a></li>
          <li><a className="getstarted scrollto" href="comecar.html">Começar</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9 text-center">
          <h1>Não sabe por onde começar?</h1>
          <h2>Siga nosso guia!</h2>
        </div>
      </div>
      <div className="text-center">
        <a href="comecar.html" className="btn-get-started scrollto">Começar</a>
      </div>
      <div className="row icon-boxes">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
            <div className="icon"><i className="ri-number-1"></i></div>
            <h4 className="title"><a href="/comecar.html">Exercício físico diário</a></h4>
            <p className="description">Dois treinos intensos por dia, 45 minutos cada, para superar meus limites e fortalecer meu corpo.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="ri-number-2"></i></div>
            <h4 className="title"><a href="/comecar.html">Dieta</a></h4>
            <p className="description">Comprometido com uma alimentação saudável e disciplinada, sem deslizes, para alcançar meus objetivos de saúde.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div className="icon-box">
            <div className="icon"><i className="ri-number-3"></i></div>
            <h4 className="title"><a href="/comecar.html">Consumo de água adequado</a></h4>
            <p className="description">Hidratação constante, um galão por dia, nutrindo meu corpo e mantendo-me energizado.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
          <div className="icon-box">
            <div className="icon"><i className="ri-number-4"></i></div>
            <h4 className="title"><a href="/comecar.html">Leitura diária</a></h4>
            <p className="description">Aprendizado contínuo através da leitura diária, alimentando minha mente e expandindo meu conhecimento.</p>
          </div>
        </div>

      </div>
    </div>
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>Desafie-se e Transforme sua Vida com o 75 Hard!</h3>
          <p> Supere seus limites, desenvolva resiliência e conquiste resultados incríveis. Inicie sua jornada de transformação pessoal agora mesmo!</p>
          <a className="cta-btn" href="comecar.html">Comece Agora!</a>
        </div>
      </div>
  

  <main id="main">
  </main>

<footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <h4>Links úteis</h4>
          <div className="col-lg-2 col-md-6 footer-links">
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="index.html">Início</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="aviso-legal.html">Aviso legal</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="politica-privacidade.html">Política de privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
          <div className="row">
            <p>Todas as informações contidas neste site são fornecidas apenas com propósitos educacionais. Elas não devem ser usadas para tratamento de quaisquer problemas de saúde ou doenças. <a href="aviso-legal.html">Clique aqui para ver a íntegra dos avisos legais e isenção de responsabilidades.</a></p>
          </div>
      </div>
    </div>
  </footer>

  <div id="preloader"></div>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <script src="assets/js/main.js"></script>
  </div>
 
  )
}
