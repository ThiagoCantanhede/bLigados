const CurriculoModel = require('../models/curriculoModel');

const create = async (req, res) => {
  const trasaction = new CurriculoModel(req.body);
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

const findAll = async (req, res) => {
  const usuario = req.query.usuario;
  try {
    const data = await CurriculoModel.find({ usuario: usuario });
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
    const data = await CurriculoModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const encontrarCurriculoPorUsuario = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await CurriculoModel.findById({ usuarioId: id });
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao buscar o curriculo do usuário: ' + id });
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
    await CurriculoModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ message: 'curriculo atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a Grade id: ' + id });
    console.log(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await CurriculoModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Curriculo excluido com sucesso' });

    console.log(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o curriculo id: ' + id });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    await CurriculoModel.deleteMany();
    res.send({
      message: `Curriculos excluidos`,
    });
    console.log(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos as Curriculos' });
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
  encontrarCurriculoPorUsuario,
};
