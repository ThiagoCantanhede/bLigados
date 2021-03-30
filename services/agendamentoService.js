const AgendamentoModel = require('../models/agendamentoModel');

const create = async (req, res) => {
  const trasaction = new AgendamentoModel(req.body);
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
    const data = await AgendamentoModel.findById({ _id: id });
    res.send(data);

    console.log(` ou essa GET  - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o agendamento id: ' + id });
    console.log(`GET  - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  let data = null;
  try {
    data = await AgendamentoModel.find({});
    res.send(data);
    console.log(` essa GET `);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao listar todos os agendamentos',
    });
    console.log(`GET  - ${JSON.stringify(error.message)}`);
  }
};

const retornarAgendamentosPorRecrutador = async (req, res) => {
  const id = req.query.recrutador;

  try {
    const data = await AgendamentoModel.find({ recrutadorId: id });
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao buscar agendamentos do recrutador: ' + id });
    console.log(`GET  - ${JSON.stringify(error.message)}`);
  }
};

const retornarAgendamentosPorCandidato = async (req, res) => {
  const id = req.query.candidato;

  try {
    const data = await AgendamentoModel.find({ candidatoId: id });
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Erro ao buscar agendamentos do candidato: ' + id });
    console.log(`GET  - ${JSON.stringify(error.message)}`);
  }
};

module.exports = {
  create,
  findOne,
  findAll,
  retornarAgendamentosPorRecrutador,
  retornarAgendamentosPorCandidato,
};
