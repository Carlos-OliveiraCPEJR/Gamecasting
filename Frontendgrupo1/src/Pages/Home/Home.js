import React from "react";
import "./home.css";
import Footer from "../Footer";

function Home() {
  return (
    <div className="homebase">
      {" "}
      <div class="headerhome">
        <a href="/home">
          <img src="/images/Logo Gamecasting (2).svg" alt="Gamecasting"></img>
        </a>
        <div class="header-right">
          <a class="cadastro" href="/cadastro">
            Vire um membro já!
          </a>
          <a class="login" href="/login">
            Acesse sua conta
          </a>
        </div>
      </div>
      <div class="page">
        <div className="background"></div>

        <div className="containerQuadradoeCrash">
          <div className="quadradoCinza">
            Jogue centenas de jogos de alta qualidade diretamente pelo seu PC ou
            via nuvem. Atualizações constantes, você sempre terá o que jogar!
          </div>
          <div className="crash4"></div>
        </div>

        <div className="container2RetanguloeJogos">
          <div className="retanguloCinza1">Os maiores sucessos estão aqui!</div>

          <div className="containerRetangulosJogosHome">
            <div className="retanguloJogo1"></div>
            <div className="retanguloJogo2"></div>
            <div className="retanguloJogo3"></div>
            <div className="retanguloJogo4"></div>
          </div>
        </div>

        <div className="containerFarCryeJogos">
          <div className="elipseFarCry"></div>
        </div>

        <div className="containerJogosDebaixo">
          <div className="quadradoMenorJogoAcima"></div>
          <div className="quadradoMenorJogoAbaixo"></div>
          <div className="quadradoMenorJogoDireita"></div>
          <div className="quadradoMenorJogoEsquerda"></div>
        </div>

        <div className="quadradoRoxoCentral"></div>

        <div class="quadradoFeedbacks">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          ></link>
          <div className="tituloDoFeedback">
            <h1 className="vejaFeedback">Veja o feedback de nossos usuários</h1>
          </div>

          <div className="containerdosFeedbacks">
            <div class="feedback1"></div>

            <div class="feedback2"></div>

            <div class="feedback3"></div>

            <div class="feedback4"></div>

            <div class="feedback5"></div>
          </div>
        </div>

        <div className="retânguloCinzaAbaixo"></div>

        <div className="espacoAbaixoNulo"></div>

        <div className="FooterHome">
          <Footer />
        </div>
      </div>
    </div>
  );
}

/*function Logo() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
        rel="stylesheet"
      ></link>
      <div class="logo"></div>
      <div class="logo-parte-roxa"></div>
      <div class="logo-parte-branca"></div>
      <div class="logo-texto">GAMECASTING</div>
    </div>
  );
}
*/
export default Home;
