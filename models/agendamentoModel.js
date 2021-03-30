const mongoose = require('mongoose');

let schema = mongoose.Schema({
  recrutadorId: String,
  candidatoId: String,
  dia: String,
  mes: String,
  ano: String,
  horario: String,
  mensagem: String,
});

const AgendamentoModel = mongoose.model('agendamento', schema);

module.exports = AgendamentoModel;
