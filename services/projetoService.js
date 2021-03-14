const ProjetoModel = require('../models/projetosModel');

const create = async (req, res) => {
  const trasaction = new ProjetoModel(req.body);
  try {
    await trasaction.save(trasaction);
    res.send();
    console.log(`POST / - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    console.log(`POST / - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  try {
    const data = await ProjetoModel.find({});
    res.send(data);
    console.log(` essa GET /`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os Projetos' });
    console.log(`GET / - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ProjetoModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET / - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Projeto id: ' + id });
    console.log(`GET / - ${JSON.stringify(error.message)}`);
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
    await ProjetoModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ message: 'Projeto atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar o Projeto id: ' + id });
    console.log(`PUT / - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await ProjetoModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Projeto excluido com sucesso' });

    console.log(`DELETE / - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Projeto id: ' + id });
    console.log(`DELETE / - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    await ProjetoModel.deleteMany();
    res.send({
      message: `Projetos excluidos`,
    });
    console.log(`DELETE /`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos os projetos' });
    console.log(`DELETE / - ${JSON.stringify(error.message)}`);
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
  removeAll,
};
