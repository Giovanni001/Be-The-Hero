const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    /**
       Definindo uma paginação para a aplicação, 
       o page indica em qual pagina a contagem vai iniciar.
     * 
     */
    const { page = 1 } = req.query;

    // Retornando a quantidade total de incidentes que a ong tem.
    const [count] = await connection("incidents").count();

    /**
       Definindo limites para a paginação, 
       ela tem um limite de 5 items por pagina, 
       o offset indica quantos items por página devemos pular.
     * 
     */
    const incidents = await connection("incidents")
      /**
         Se o id da tabela "ongs" for igual ao id da 
         tabela "incidents", traga ambos os dados das tabelas.
       * 
       */
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);

    // Retornando o total de registros no Headers da requisição.
    res.header("X-TotalCount", count["count(*)"]);
    return res.json(incidents);
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    /*
       Como estamos inserindo apênas um unico registro, 
       ele tera apênas uma posição no array, 
       estamos armazenando isso na variavel "id".
     */
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    /*
       Para identificar que tal incidente partence a tal ong, 
       pegamos o 'ong_id' da tabela 'ongs'.
    */
    const { id } = req.params;

    /*
       Estamos buscando esse campo para ver se o incidente 
       que esta sendo deletado, foi criado pela ong.
    */

    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    /*
       Se o 'ong_id' que foi buscado no banco for diferente
      do 'ong_id' que está logado, ele retorna um erro.  
     */
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operation Not Permited" });
    }

    await connection("incidents").where("id", id).delete();

    return res.status(204).send();
  },
};
