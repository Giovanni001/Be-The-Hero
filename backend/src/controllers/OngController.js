const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    // Estamos retornando todos os dados da tabela "ongs"
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    /*
       A o invés de retornar o id, ele retornar 4 bits 
       de caracteres aleatorio, e depois ele é convertido 
       em uma String hexadecimal.   
     */

    const id = crypto.randomBytes(4).toString("HEX");

    /*
       Passando o nome da tabela que vai ser inserido 
       os dados e os campos usando o método Insert().
    */

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    // Será retornado apênas o id, pois é ele que será o identificador de cada Ong.
    return res.json({ id });
  },
};
