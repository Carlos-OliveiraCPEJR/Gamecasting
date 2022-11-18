import React from "react";
import "./maisjogados.css";
import Barra from "../../Barra";
import Footer from "../../Footer";

function MaisJogados() {
  return (
    <div className="background_plataforma">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Iceland"
      />
      <Barra />
      <br></br>
      <div className="retangulo"> Mais Jogados </div>
      <div className="grupojogos">
        <div className="jogo">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>{" "}
          <img src="../images/vava.png" alt="Valorant" />
          <p className="titulo">Valorant</p>
        </div>

        <div className="jogo">
          {" "}
          <img src="../images/image 35.png" alt="Battlegrounds" />
          <p className="titulo">PUBG: Battlegrounds</p>
        </div>

        <div className="jogo">
          <img src="../images/image 30.png" alt="GTAV" />
          <p className="titulo">Grand Theft Auto V</p>
        </div>
        <div className="jogo">
          <img src="../images/image 31.png" alt="R6" />
          <p className="titulo">Rainbow Six Siege</p>
        </div>
      </div>
      <div className="grupojogos">
        <div className="jogo">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>{" "}
          <img src="../images/image 23.png" alt="WOW" />
          <p className="titulo">World of Warcraft</p>
        </div>
        <div className="jogo">
          {" "}
          <img src="../images/image 36.png" alt="SpiderMan" />
          <p className="titulo">Marvel's Spider-Man</p>
        </div>

        <div className="jogo">
          <img src="../images/mw2.png" alt="MW2" />
          <p className="titulo">COD: Modern Warfare 2</p>
        </div>

        <div className="jogo">
          <img src="../images/image 33.png" alt="Destiny" />
          <p className="titulo">Destiny</p>
        </div>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MaisJogados;
