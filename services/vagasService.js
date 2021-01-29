const VagasModel = require('../models/vagasModel');

const create = async (req, res) => {
  const trasaction = new VagasModel(req.body);
  try {
    await trasaction.save(trasaction);
    res.send();
    console.log(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Algum erro ocorreu ao salvar a vaga',
    });
    console.log(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  const usuario = req.query.usuario;
  try {
    const data = await VagasModel.find({ usuario: usuario });
    res.send(data);
    console.log(` essa GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await VagasModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar a vaga id: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }
  const id = req.params.id;
  try {
    await VagasModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ message: 'vaga atualizada com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a vaga id: ' + id });
    console.log(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await VagasModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Vaga excluido com sucesso' });

    console.log(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar a vaga id: ' + id });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    await VagasModel.deleteMany();
    res.send({
      message: `Vagas excluidos`,
    });
    console.log(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todas as vagas' });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

module.exports = { create, findAll, findOne, update, remove, removeAll };
