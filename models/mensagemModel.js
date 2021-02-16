const mongoose = require('mongoose');

let schema = mongoose.Schema({
  destinatarioId: String,
  nomeDestinatario: String,
  autorId: String,
  nomeAutor: String,
  assunto: String,
  mensagem: String,
});

const MensagemModel = mongoose.model('mensagem', schema);

module.exports = MensagemModel;
