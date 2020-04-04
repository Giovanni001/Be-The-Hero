import axios from "axios";

// Criando uma base url, para ser usado durante o projeto.
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
