import React from "react";
import "./lancamentos.css";
import Barra from "../../Barra";
import Footer from "../../Footer/Footer";

function Lancamentos() {
  return (
    <div className="background_plataforma">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Iceland"
      />
      <Barra />

      <br></br>
      <div className="retangulo">Lançamentos</div>
      <br></br>
      <div className="grupojogos">
        <div className="jogo">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>{" "}
          <img src="../images/Jogo 1.png" alt="RDR2" />
          <p className="titulo">Red Dead Redemption 2</p>
        </div>

        <div className="jogo">
          {" "}
          <img src="../images/mw2.png" alt="MW2" />
          <p className="titulo">COD: Modern Warfare 2</p>
        </div>

        <div className="jogo">
          {" "}
          <img src="../images/image 37.png" alt="FarCry6" />
          <p className="titulo">Far Cry 6</p>
        </div>

        <div className="jogo">
          <img src="../images/image 32.png" alt="ElderRing" />
          <p className="titulo">Elden Ring</p>
        </div>
      </div>
      <div className="grupojogos">
        <div className="jogo">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>{" "}
          <img src="../images/image 16.png" alt="Stray" />
          <p className="titulo">Stray</p>
        </div>
        <div className="jogo">
          {" "}
          <img src="../images/image 36.png" alt="SpiderMan" />
          <p className="titulo">Marvel's Spider-Man</p>
        </div>

        <div className="jogo">
          {" "}
          <img src="../images/image 29.png" alt="Diablo" />
          <p className="titulo">Diablo</p>
        </div>

        <div className="jogo">
          <img src="../images/vava.png" alt="Valorant" />
          <p className="titulo">Valorant</p>
        </div>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Lancamentos;
