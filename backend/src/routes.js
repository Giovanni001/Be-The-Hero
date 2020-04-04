const express = require("express");
const OngController = require("./controllers/OngController");
const IncidenteController = require("./controllers/IncidenteController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/*
  Tipôs de parâmetros:
 
  Query Params: Parametros nomeados enviados na rota após o "?" (Filtros, Paginação); 
    const query = req.query;
    console.log(query);
  
  Route Params: Parametros ultilizados para identificar recursos (/:id);
    const params = req.params;
    console.log(params);

  Request Body: Corpo da requisição, ultilizado para criar ou alterar.
    const body = req.body;
    console.log(body);
*/

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidenteController.index);
routes.post("/incidents", IncidenteController.create);

routes.delete("/incidents/:id", IncidenteController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);

module.exports = routes;
