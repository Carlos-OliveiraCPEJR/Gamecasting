import React from "react";
import "./plataforma.css";
import Barra from "../Barra/Barra";
import Footer from "../Footer/Footer";

//import {useNavigate} from "react-router-dom";

function Plataforma() {
  return (
    <div className="background_plataforma">
      <Barra/>  
      <div className="elements">
        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">AÇÃO</div>
          <div className="grupojogos">
            <div className="jogo">
              <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
                rel="stylesheet"
              ></link>{" "}
              <img src="./images/image 35.png" alt="Battlegrounds" />
              <p className="titulo">PUBG: Battlegrounds</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 36.png" alt="SpiderMan" />
              <p className="titulo">Marvel's Spider-Man</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 37.png" alt="FarCry6" />
              <p className="titulo">Far Cry 6</p>
            </div>

            <div className="jogo">
              <img src="./images/image 11.png" alt="Uncharted" />
              <p className="titulo">Uncharted</p>
            </div>
          </div>
        </div>

        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">AVENTURA</div>
          <div className="grupojogos">
            <div className="jogo">
              <img src="./images/image 30.png" alt="GTAV" />
              <p className="titulo">Grand Theft Auto V</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/Jogo 3.png" alt="MINECRAFT" />
              <p className="titulo">Minecraft</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/Jogo 4.png" alt="AMONGUS" />
              <p className="titulo">Among Us</p>
            </div>

            <div className="jogo">
              <img src="./images/Jogo 1.png" alt="RDR2" />
              <p className="titulo">Red Dead Redemption 2</p>
            </div>
          </div>
        </div>

        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">RPG</div>
          <div className="grupojogos">
            
            <div className="jogo">
              {" "}
              <img src="./images/image 32.png" alt="ElderRing" />
              <p className="titulo">Elden Ring</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/Jogo.png" alt="Skyrim" />
              <p className="titulo">Skyrim V</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 33.png" alt="Destiny" />
              <p className="titulo">Destiny</p>
            </div>

            <div className="jogo">
              <img src="./images/image 34.png" alt="TheWitcher3" />
              <p className="titulo">The Witcher 3</p>
            </div>
          </div>
        </div>

        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">MMO</div>

          <div className="grupojogos">
            <div className="jogouser">
              {" "}
              <img src="./images/ESO.png" alt="ESO" />
              <p className="titulo">The Elden Ring</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 23.png" alt="WOW" />
              <p className="titulo">World of Warcraft</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 26.png" alt="GW2" />
              <p className="titulo">Guildwars 2</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 29.png" alt="Diablo" />
              <p className="titulo">Diablo</p>
            </div>
          </div>
        </div>

        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">FPS</div>

          <div className="grupojogos">
            <div className="jogo">
              {" "}
              <img src="./images/mw2.png" alt="MW2" />
              <p className="titulo">COD: Modern Warfare 2</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/vava.png" alt="Valorant" />
              <p className="titulo">Valorant</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 31.png" alt="R6" />
              <p className="titulo">Rainbow Six Siege</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 11.png" alt="Uncharted" />
              <p className="titulo">Uncharted</p>
            </div>
          </div>
        </div>

        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">ESTRATÉGIA</div>

          <div className="grupojogos">
            <div className="jogo">
              {" "}
              <img src="./images/image 18.png" alt="TWW" />
              <p className="titulo">Total War Warhammer</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 21.png" alt="DOTA2" />
              <p className="titulo">Dota 2</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 22.png" alt="CIV" />
              <p className="titulo">Civilization</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 25.png" alt="hoi" />
              <p className="titulo">Hearts of Iron IV</p>
            </div>
          </div>
        </div>

        <div className="container_jogos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          />

          <div className="retangulo">INDIE</div>

          <div className="grupojogos">
            <div className="jogo">
              {" "}
              <img src="./images/image 16.png" alt="Stray" />
              <p className="titulo">Stray</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/image 17.png" alt="Scorn" />
              <p className="titulo">Scorn</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/hk.png" alt="HollowKnight" />
              <p className="titulo">Hollow Knight</p>
            </div>

            <div className="jogo">
              {" "}
              <img src="./images/sv.png" alt="StardewValley" />
              <p className="titulo">Stardew Valley</p>
            </div>
          </div>
        </div>

        
      </div>
      <div className="footer">
          <Footer></Footer>
        </div>
    </div>
  );
}

/* <div className="carrosselPlataforma">
        <div className="content">
          <div className="slides">
            <input type="radio" name="radio" id="slide1" />
            <input type="radio" name="radio" id="slide2" />
            <input type="radio" name="radio" id="slide3" />

            <div className="slide s1">
              <img src="./images/image10.png" alt="CyberPunk" />
            </div>

            <div className="slide s2">
              <img src="./images/mw.jpg" alt="CoDMW" />
            </div>

            <div className="slide s3">
              <img src="./images/thewitcher.jpg" alt="TW3" />
            </div>
            <div className="navigation">
              <label class="bar" for="slide1" />
              <label class="bar" for="slide2" />
              <label class="bar" for="slide3" />
            </div>
          </div>
        </div>
      </div>*/

/*<div className= "container_jogos">
<link rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Iceland"/>

<div className= "retangulo">SIMULAÇÃO</div>

    <div className= "simulacao">


      

      
      <img src = "./images/image 12.png" alt = "Fifa23" />
      <img src = "./images/image 13.png" alt = "PZ" />
      <img src = "./images/image 14.png" alt = "ETS" />
      <img src = "./images/image 15.png" alt = "FH5" />
    </div>
    </div>

</div>*/
export default Plataforma;
