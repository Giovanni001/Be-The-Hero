const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    // Pega o id da ong que esta logada da aplicação.
    const { id } = req.body;

    /*
      Buscando uma Ong do banco de dados, verificando 
       se o 'id' que veio no body da requisição é igual 
       ao que esta no banco. 
     */

    const ong = await connection("ongs").where("id", id).select("name").first();

    // Se a Ong nao existir, ele retorna um erro.
    if (!ong) {
      return res.status(400).json({ error: "No Ong Found with this id" });
    }

    return res.json(ong);
  },
};
