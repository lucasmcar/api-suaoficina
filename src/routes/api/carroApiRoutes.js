const express = require('express');
const carroController = require('../../controller/api/CarroController');

const router = express.Router();

router
    .route('/api/carro/novo')
    .post(carroController.cadastrarCarro);

router
    .route('/api/carro/:placa')
    .get(carroController.verCarroPorPlaca)
    .put(carroController.editarCarro)
    .delete(carroController.apagarCarro);~

router
    .route('/api/carro/marca/:marca')
    .get(carroController.verCarrosPorMarca);

router
    .route('/api/carros/')
    .get(carroController.verTodos);

router
    .route('/api/nrcarros/')
    .get(carroController.retornaTotalCarros);

router
    .route('/api/nrcarros/:nome')
    .get(carroController.retornaTotalCarrosPorCliente);

module.exports = router;