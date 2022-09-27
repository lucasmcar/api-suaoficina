const express = require('express');
const carroController = require('../../controller/api/CarroController');

const router = express.Router();

router
    .route('/api/carro/novo')
    .post(carroController.cadastrarCarro);

router
    .route('/api/carro/:placa')
    .get(carroController.verCarroPorPlaca);
router
    .route('/api/carro/marca/:marca')
    .get(carroController.verCarrosPorMarca);

router
    .route('/api/carros/')
    .get(carroController.verTodos);

module.exports = router;