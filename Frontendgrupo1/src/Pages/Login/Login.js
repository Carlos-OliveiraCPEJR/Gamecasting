/* eslint-disable no-unused-vars */
import "./login.css";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [senha, setPassword] = useState();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('/login', {email,senha});
      alert("Bem vindo(a)", response.data.user.name);
      login(response.data.accessToken);
      navigate("/plataforma");
    } catch (error) {
      if(error.response === 403){
        alert("Credenciais inválidas");
      }
      else{
        alert(error.response.data.notification);
      }
      console.warn(error);
    }
  }

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
            onClick={handleLogin}
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
