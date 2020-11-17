const express = require('express');
const usuariosService = require('../services/usuariosService.js');
const usuariosRouter = express.Router();
const curriculosService = require('../services/curriculoService.js');
const curriculoRouter = express.Router();

usuariosRouter.put('/usuario/:id', usuariosService.update);
usuariosRouter.post('/usuario/', usuariosService.create);
usuariosRouter.get('/usuario/', usuariosService.findAll);
usuariosRouter.get('/usuario/:id', usuariosService.findOne);
usuariosRouter.delete('/usuario/:id', usuariosService.remove);
usuariosRouter.delete('/usuario/', usuariosService.removeAll);

curriculoRouter.put('/curriculo/:id', curriculosService.update);
curriculoRouter.post('/curriculo/', curriculosService.create);
curriculoRouter.get('/curriculo/', curriculosService.findAll);
curriculoRouter.get('/curriculo/:id', curriculosService.findOne);
curriculoRouter.delete('/curriculo/:id', curriculosService.remove);
curriculoRouter.delete('/curriculo/', curriculosService.removeAll);

module.exports = { usuariosRouter, curriculoRouter };
