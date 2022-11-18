/* eslint-disable no-unused-vars */
import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState();

  return (
    <div className="background_login">
      <div className="base">
        <div className="container_login">
          <div class="titulologin">
            <img
              onClick={() => {
                navigate("/home");
              }}
              id="logogamecastinglogin"
              src="/images/logoGamecastingfundoroxo.png"
              alt="Gamecasting"
            ></img>
          </div>

          <form className="inputs">
            <label itemID="email">Email</label>
            <input
              type="text"
              className="email"
              placeholder="Digite seu Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
            <label itemID="senha">Senha</label>
            <input
              type="password"
              className="senha"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </form>
          <br />
          <button
            class="button"
            onClick={() => {
              navigate("/plataforma");
            }}
          >
            ENTRAR
          </button>
          <br />
          <label itemID="esqueciasenha">Novo na plataforma?</label>
          <button
            id="esqueciasenha"
            onClick={() => {
              navigate("/cadastro");
            }}
          >
            Clique Aqui
          </button>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Login;
