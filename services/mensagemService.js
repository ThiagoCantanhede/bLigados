const MensagemModel = require('../models/mensagemModel');

const create = async (req, res) => {
  const trasaction = new MensagemModel(req.body);
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
    const data = await MensagemModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const encontrarMensagemPorAutor = async (req, res) => {
  const id = req.query.autor;

  try {
    const data = await MensagemModel.find({ autorId: id });
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao buscar o mensagem do autor: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const encontrarMensagemPorDestinatario = async (req, res) => {
  const id = req.query.destinatario;

  try {
    const data = await MensagemModel.find({ destinatarioId: id });
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao buscar o mensagem do destinatário: ' + id });
    console.log(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await MensagemModel.findByIdAndRemove({ _id: id });
    res.send({ message: 'Mensagem excluida com sucesso' });

    console.log(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar a mensagem id: ' + id });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
    await MensagemModel.deleteMany();
    res.send({
      message: `Mensagens excluidas`,
    });
    console.log(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todas as mensagens' });
    console.log(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

module.exports = {
  create,
  findOne,
  remove,
  removeAll,
  encontrarMensagemPorAutor,
  encontrarMensagemPorDestinatario,
};
