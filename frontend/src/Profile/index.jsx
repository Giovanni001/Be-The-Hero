import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logo from "../assets/logo.svg";
import "./style.css";
import api from "../services/api";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  /* 
    useEffect: Dispara a função em algum determinado momento do componente renderiza
    
    Recebe dois parametros:
      Qual função vai ser executada (função para carregar os dados de uma ONG).
      Quando essa função vai ser executada.
  */
  useEffect(() => {
    api
      .get("profile", {
        /*
          Identificando qual organização está logada pelo Id, 
          que está sendo pego no Header da requisição
        */
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        // Gravando os dados que foram capturados no state.
        setIncidents(response.data);
      });
    // Toda vez que o parametro que vai dentro do array mudar, execute a função novamente.
  }, [ongId]);

  async function handleDeleteIncidents(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });
      /*
        Para cada um dos incidentes, manter apenas os incidentes 
        em que o id for diferente do que foi deletado.
      */
      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar o caso, tente novamente !");
    }
  }

  function handleLogOut() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="" />
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={() => handleLogOut()}>
          <FiPower size={18} background="#E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>
            <strong>VALOR</strong>
            <p>
              {/* Formatando o valor para o formato BR de moeda */}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>
            <button
              type="button"
              onClick={() => handleDeleteIncidents(incident.id)}
            >
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
