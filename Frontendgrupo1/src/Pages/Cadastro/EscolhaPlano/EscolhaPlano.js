import React from "react";
import "./escolhaplano.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function EscolhaPlano() {
  const navigate = useNavigate();
  const [planoselecionado, setPlanoselecionado] = useState();

  const planos = [
    {
      id: 1,
      title: "Starter",
      preco: "R$ 14,90",
      benefits: ["100 jogos", "Qualidade HD"],
    },
    {
      id: 2,
      title: "Medium",
      preco: "R$ 24,90",
      benefits: [
        "100 jogos",
        "Qualidade Full HD",
        "Retrocompatibilidade",
        "Descontos Exclusivos",
      ],
    },
    {
      id: 3,
      title: "Pro",
      preco: "R$ 32,90",
      benefits: [
        "100 jogos",
        "Qualidade Full HD",
        "Retrocompatibilidade",
        "Descontos Exclusivos",
        "Lançamentos no primeiro dia",
        "Acesso a serviços parceiros",
      ],
    },
    {
      id: 4,
      title: "Ultimate",
      preco: "R$ 39,90",
      benefits: [
        "100 jogos",
        "Qualidade 4K",
        "Retrocompatibilidade",
        "Descontos Exclusivos",
        "Lançamentos no primeiro dia",
        "Acesso a serviços parceiros",
        "Obtenha 2 jogos gratuitos por mês",
      ],
    },
  ];

  function selecionarPlano(id) {
    setPlanoselecionado(id);
  }

  return (
    <div className="background_cadastro">
      <div className="base">
        <div className="container_planos">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Iceland"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-9,900;0,400;0,700&display=swap"
            rel="stylesheet"
          ></link>
          <div className="detalhes">
            <div class="tituloplano">
              <img
                onClick={() => {
                  navigate("/home");
                }}
                cursor="pointer"
                id="logogamecastinglogin"
                src="/images/logoGamecastingfundoroxo.png"
                alt="Gamecasting"
              ></img>
            </div>
            <h2>Selecione o plano</h2>
            <p>
              O GAMECASTING oferece diferentes opções para diferentes
              necessidades
            </p>
          </div>
          <div className="form">
            {planos.map((plano) => (
              <div
                className="form-input"
                onClick={() => selecionarPlano(plano.id)}
                data-selecionado={plano.id === planoselecionado}
              >
                <label for="planostarter">
                  <div className="title">{plano.title}</div>
                  <div className="precoplano">
                    <b>{plano.preco}</b>
                    <span>/mês</span>
                  </div>
                  <div className="descricaoplano">
                    {Array.from({ ...plano.benefits, length: 7 }).map(
                      (benefit) => (
                        <div>{benefit || "-"}</div>
                      )
                    )}
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="botaocontinuar">
            <button
              class="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EscolhaPlano;

/*          <div className="form">
          <div className="form-input">
            <label for="planostarter">
              <div className="title">Starter</div>
              <div className="precoplano">
                <b>R$ 14,90</b>
                <span>/mês</span>
              </div>
              <div className="descricaoplano">
                <div>100 jogos</div>
                <div> Qualidade HD</div>
                <div> - </div>
                <div> - </div>
                <div> - </div>
                <div> - </div>
                <div> - </div>
              </div>
            </label>
          </div>


<div className="form-input">
            <input
              type="radio"
              name="plano"
              id="planomedium"
              value="R$24,90"
            ></input>

            <label for="planomedium">
              <div className="title">Medium</div>
              <div className="precoplano">
                <b>R$ 24,90</b>
                <span>/mês</span>
              </div>
              <div className="descricaoplano">
                <div>100 jogos</div>
                <div>Qualidade Full HD</div>
                <div>Retrocompatibilidade</div>
                <div>Descontos Exclusivos</div>
                <div> - </div>
                <div> - </div>
                <div> - </div>
              </div>
            </label>

<div className="form-input">
            <input
              type="radio"
              name="plano"
              id="planopro"
              value="R$32,90"
            ></input>
            <label for="planopro">
              <div className="title">Pro</div>
              <div className="precoplano">
                <b>R$ 32,90</b>
                <span>/mês</span>
              </div>
              <div className="descricaoplano">
                <div>Catálogo Ilimitado</div>
                <div>Qualidade Full HD</div>
                <div>Retrocompatibilidade</div>
                <div> Descontos Exclusivos</div>
                <div> Lançamentos no primeiro dia</div>
                <div> Acesso a serviços parceiros</div>
                <div> - </div>
              </div>
            </label>
          </div>

          <div className="form-input">
            <input
              type="radio"
              name="plano"
              id="planoultimate"
              value="R$39,90"
            ></input>
            <label for="planoultimate">
              <div className="title">Ultimate</div>
              <div className="precoplano">
                <b>R$ 39,90</b>
                <span>/mês</span>
              </div>
              <div className="descricaoplano">
                <div>Catálogo Ilimitado</div>
                <div>Qualidade 4K</div>
                <div>Retrocompatibilidade</div>
                <div>Descontos Exclusivos</div>
                <div>Lançamentos no primeiro dia</div>
                <div>Acesso a serviços parceiros</div>
                <div>Obtenha 2 jogos gratuitos por mês</div>
              </div>
            </label>
          </div>
*/

/*function Logo(){
  return(
  <div>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet"></link>
  <div class="logo"></div>
  <div class="logo-parte-roxa"></div>
  <div class="logo-parte-branca"></div>
  <div class="logo-texto">GAMECASTING</div>
  </div>
  );
}



               /*<table>
          <tbody>
            <tr row="planos">
              <td>&nbsp;</td>
              <td>Starter</td>
              <td>Medium</td>
              <td>Pro</td> 
              <td>Ultimate</td>
            </tr>
            <tr row="preços">
              <td>&nbsp;</td>
              <td>R$ 14,90</td>
              <td>R$ 24,90</td>
              <td>R$ 32,90</td> 
              <td>R$ 39,90</td>
            </tr>
            <tr row="Catalogo de jogos">
              <td>Catálogo de jogos</td>
              <td>100 jogos</td>
              <td>100 jogos</td>
              <td>Acesso Ilimitado</td>
              <td>Acesso Ilimitado</td>
            </tr>
            <tr row="Qualidade">
              <td>Qualidade</td>
              <td>HD</td>
              <td>Full HD</td>
              <td>Full HD</td>
              <td>4K</td>
            </tr>
            <tr row="Retrocompatibilidade">
              <td>Retrocompatibilidade</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr row="Descontos Exclusivos">
              <td>Descontos Exclusivos</td>
              <td>✖</td>
              <td>✔</td>
              <td>✔</td>
              <td>✔</td>
            </tr>

            </tbody>
          </table>*/

/*Acesso a 100 jogos
                    Qualidade Full-HD
                     Catálogo atualizado constantemente
                    
                    R$ 14,90
                    <


             
                
                    Acesso a 100 jogos
                     
                    Qualidade Full-HD
                     
                    Catálogo atualizado constantemente
                     
                    Retrocompatibilidade
                    
                  
                    Descontos exclusivos
                     
                  
                   
                   
                   
                   
                   
                 
                    R$ 24,90
                   
                
                
                

               
                <h2>Pro</h2>
                
                    Biblioteca completa
                     
                    Qualidade Full-HD
                     
                    Catálogo atualizado constantemente
                     
                    Retrocompatibilidade
                     
                    Descontos exclusivos
                     
                    Use em vários dispositivos simultaneamente
                     
                    Lançamentos disponíveis no primeiro dia
                      
                    Acesso a serviços parceiros
                     
                     
                     
                     
                    
                    R$ 32,90
                  
                
      
                


                <
                
                  
                      Biblioteca completa
                       
                      Qualidade 4K
                       
                      Catálogo atualizado constantemente
                       
                      Retrocompatibilidade
                       
                      Descontos exclusivos
                       
                      Use em vários dispositivos simultaneamente
                       
                      Jogos na nuvem
                       
                      Lançamentos disponíveis no primeiro dia
                        
                      Acesso a serviços parceiros
                       
                      Acesso vitalício a 2 jogos todo mês     
                  
                   
                      
                      R$ 39,90
                      */
