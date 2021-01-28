const express = require('express');
const usuariosService = require('../services/usuariosService.js');
const usuariosRouter = express.Router();
const curriculosService = require('../services/curriculoService.js');
const curriculoRouter = express.Router();
const vagasService = require('../services/vagasService.js');
const vagasRouter = express.Router();
const artigoService = require('../services/artigoService.js');
const artigoRouter = express.Router();

usuariosRouter.put('/usuario/:id', usuariosService.update);
usuariosRouter.post('/usuario/', usuariosService.create);
usuariosRouter.get('/usuario/', usuariosService.findAll);
usuariosRouter.get('/buscarUsuario/', usuariosService.buscarUsuario);
usuariosRouter.get('/usuario/:id', usuariosService.findOne);
usuariosRouter.delete('/usuario/:id', usuariosService.remove);
usuariosRouter.delete('/usuario/', usuariosService.removeAll);

curriculoRouter.put('/curriculo/:id', curriculosService.update);
curriculoRouter.post('/curriculo/', curriculosService.create);
curriculoRouter.get('/curriculo/', curriculosService.findAll);
curriculoRouter.get('/curriculo/:id', curriculosService.findOne);
curriculoRouter.delete('/curriculo/:id', curriculosService.remove);
curriculoRouter.delete('/curriculo/', curriculosService.removeAll);

vagasRouter.put('/vaga/:id', vagasService.update);
vagasRouter.post('/vaga/', vagasService.create);
vagasRouter.get('/vaga/', vagasService.findAll);
vagasRouter.get('/vaga/:id', vagasService.findOne);
vagasRouter.delete('/vaga/:id', vagasService.remove);
vagasRouter.delete('/vaga/', vagasService.removeAll);

artigoRouter.put('/artigo/:id', artigoService.update);
artigoRouter.post('/artigo/', artigoService.create);
artigoRouter.get('/artigo/', artigoService.findAll);
artigoRouter.get('/artigo/:id', artigoService.findOne);
artigoRouter.delete('/artigo/:id', artigoService.remove);
artigoRouter.delete('/artigo/', artigoService.removeAll);

module.exports = { usuariosRouter, curriculoRouter, vagasRouter, artigoRouter };
