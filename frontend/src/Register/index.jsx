import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../services/api";

import "./style.css";
import logo from "../assets/logo.svg";

export default function Register() {
  // Cirando um state para armazenar os valores dos input's.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhasapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");

  // History é usado para enviar o usuario a outra rota especifica.
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    /**
        Enviando os dados para a tabela "ongs" no banco de dados, 
        realizando o cadastro.
    */
    try {
      const response = await api.post("ongs", data);
      alert(`Seu id de acesso ID=${response.data.id}`);

      // Se o Cadastro deu certo, envie o usuario até a home.
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erro no cadastro, tente novamente mais tarde !");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua Ong
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já possuo cadastro !
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome da Ong"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhasapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUF(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
