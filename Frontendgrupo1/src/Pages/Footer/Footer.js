import React from "react";
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerBox">
      <footer>
        <div className="footerContent">
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-9,900;0,400;0,700&display=swap"
            rel="stylesheet"
          ></link>
          <img
            itemID="logogamecastinglogin"
            src="/images/logoGamecastingfundoclaro.png"
            alt="Gamecasting"
          ></img>

          <p>Seu novo jeito de jogar</p>
          <ul className="redessociaisfooter">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="instagramgamecasting">
                  <FaInstagram size="40" />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="twittermgamecasting">
                  <FaTwitter size="40"></FaTwitter>
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="instagramgamecasting">
                  <FaFacebook size="39" />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerBottom">
          <p>
            {" "}
            &copy;2022 GAMECASTING. Designed by <span>Grupo 1</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

/*  <div>   
        
    <div className="ContainerFooter">  
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceland"></link>
    <div className="footerPagina">
    
    <div><Logo /></div>
    <div className="containerLogoeTexto">
        <div className="logoCPE"></div>  
        <div className="CPEtexto">CPE</div>
    </div>

    <div className="CPEPorExtenso">Consultoria e Projetos Elétricos</div>
   
    <div className="Social">

    <a href="https://www.instagram.com">
          <FaInstagram size="40"  color="#000"/>
          gamecasting.of
        </a>
       
    <a href="https://twitter.com/"><FaTwitter size="40"  color="#000"></FaTwitter>
    gamecasting
    </a>   
        </div> 
    </div>
   
    </div> 
    </div>  */

/*function Logo() {
  return (
    <div>
      <div class="logo"></div>
      <div class="logo-parte-roxa"></div>
      <div class="logo-parte-branca"></div>
      <div class="logo-texto">GAMECASTING</div>
    </div>
  );
}
*/
export default Footer;
