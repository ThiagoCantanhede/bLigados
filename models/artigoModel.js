const mongoose = require('mongoose');

let schema = mongoose.Schema({
  titulo: String,
  autorId: String,
  descricao: String,
  data: String,
});

const ArtigoModel = mongoose.model('artigo', schema);

module.exports = ArtigoModel;
