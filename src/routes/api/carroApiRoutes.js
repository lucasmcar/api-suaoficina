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
    .route('/api/carro/total/')
    .get(carroController.retornaTotalCarros);

module.exports = router;