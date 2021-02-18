const AuditoriaModel = require('../models/auditoriaModel');

const create = async (req, res) => {
  const trasaction = new AuditoriaModel(req.body);
  try {
    await trasaction.save(trasaction);
    res.send();
    console.log(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    console.log(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await AuditoriaModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  let data = null;
  try {
    data = await ArtigoModel.find({});
    res.send(data);
    console.log(` essa GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todas as ações' });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const retornarAcoesPorUsuario = async (req, res) => {
  const id = req.query.usuario;

  try {
    const data = await AuditoriaModel.find({ usuarioId: id });
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar ações do usuario: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const retornarAcoesPorTipo = async (req, res) => {
  const tipo = req.query.tipo;

  try {
    const data = await AuditoriaModel.find({ tipoAcao: tipo });
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar ações do tipo: ' + tipo });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

module.exports = {
  create,
  findOne,
  findAll,
  retornarAcoesPorUsuario,
  retornarAcoesPorTipo,
};
