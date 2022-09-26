const express = require('express');
const marcaController = require('../../controller/api/MarcaController');

const router = express.Router();

router
    .route('/marca')
    .get(marcaController.verMarcas);

module.exports = router;