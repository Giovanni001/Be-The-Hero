import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../services/api";

import logo from "../assets/logo.svg";
import "./style.css";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    // Cadastrando um novo caso
    try {
      await api.post("incidents", data, {
        // Extraindo do 'headers' o id da Ong que está logada
        headers: {
          Authorization: ongId,
        },
      });
      alert("Caso cadastrado com sucesso !");

      history.push("/profile");
    } catch (err) {
      alert("Não foi possivel cadastrar o caso !");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Titúlo do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
