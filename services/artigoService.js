const ArtigoModel = require('../models/artigoModel');

const create = async (req, res) => {
  const trasaction = new ArtigoModel(req.body);
  try {
    await trasaction.save(trasaction);
    res.send();
    console.log(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Algum erro ocorreu ao salvar o artigo',
    });
    console.log(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  const usuario = req.query.usuario;
  let data = null;
  try {
    if (usuario) {
      data = await ArtigoModel.find({ autorId: usuario });
    } else {
      data = await ArtigoModel.find({});
    }
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
    const data = await ArtigoModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o artigo id: ' + id });
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
    await ArtigoModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ message: 'artigo atualizado com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar o artigo id: ' + id });
    console.log(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await ArtigoModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Artigo excluido com sucesso' });

    console.log(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o artigo id: ' + id });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  try {
    await ArtigoModel.deleteMany();
    res.send({
      message: `Artigos excluidos`,
    });
    console.log(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos os artigos' });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

module.exports = { create, findAll, findOne, update, remove, removeAll };
