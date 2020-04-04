const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// instanciando a aplicação.
const app = express();

// Modulo de segurança para definir quem pode acessar a aplicação.
app.use(cors());

// Dizendo ao express para converter o Json no corpo da requisição.
app.use(express.json());

// Estamos fazendo com que a aplicação identifique que estamos ultilizandoas rotas.
app.use(routes);

// O servidor vai ser executado nessa porta.
app.listen(3333);
