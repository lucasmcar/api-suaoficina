const express = require('express');
const marcaController = require('../../controller/api/MarcaController');

const router = express.Router();

router
    .route('/api/marcas')
    .get(marcaController.verMarcas);

router 
    .route('/api/marca/nova')
    .post(marcaController.cadastrarMarca);

router
    .route('/api/marca/:id')
    .get(marcaController.verMarcaPorId)
    .put(marcaController.editarMarca)
    .delete(marcaController.apagarMarca);

module.exports = router;