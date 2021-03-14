const ContatoModel = require('../models/contatosModel');

const create = async (req, res) => {
  const trasaction = new ContatoModel(req.body);
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
  try {
    const data = await ContatoModel.find({});
    res.send(data);
    console.log(` essa GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os contatos' });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await ContatoModel.findById({ _id: id });
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o contato id: ' + id });
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
    await ContatoModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ message: 'contato atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar o contato id: ' + id });
    console.log(`PUT /- ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await ContatoModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Contato excluido com sucesso' });

    console.log(`DELETE / - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o contato id: ' + id });
    console.log(`DELETE / - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    await ContatoModel.deleteMany();
    res.send({
      message: `Contatos excluidos`,
    });
    console.log(`DELETE /`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos os contatos' });
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
