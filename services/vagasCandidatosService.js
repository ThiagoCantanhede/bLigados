const VagasCandidatosModel = require('../models/vagasCandidatosModel');

const create = async (req, res) => {
  const trasaction = new VagasCandidatosModel(req.body);
  try {
    await trasaction.save(trasaction);
    res.send();
    console.log(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Algum erro ocorreu ao vinvular candidato a vaga',
    });
    console.log(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  try {
    const data = await VagasCandidatosModel.find();
    res.send(data);
    console.log(` essa GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const encontrarVagasDoCandidato = async (req, res) => {
  const candidato = req.query.candidato;
  try {
    const data = await VagasCandidatosModel.find({ usuarioId: candidato });
    res.send(data);
    console.log(` essa GET /grade`);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Erro ao listar todos os documentos do candidato',
    });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const encontrarCandidatosDaVaga = async (req, res) => {
  const vaga = req.query.vaga;
  try {
    const data = await VagasCandidatosModel.find({ vagaId: vaga });
    res.send(data);
    console.log(` essa GET /grade`);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao listar todos os documentos da vaga',
    });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await VagasCandidatosModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar por id: ' + id });
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
    await VagasCandidatosModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ message: 'vaga atualizada com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar: ' + id });
    console.log(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await VagasCandidatosModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Vaga excluido com sucesso' });

    console.log(`DELETE /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Nao foi possivel deletar id: ' + id });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    await VagasCandidatosModel.deleteMany();
    res.send({
      message: `Vagas excluidos`,
    });
    console.log(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir tudo' });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
  removeAll,
  encontrarVagasDoCandidato,
  encontrarCandidatosDaVaga,
};
