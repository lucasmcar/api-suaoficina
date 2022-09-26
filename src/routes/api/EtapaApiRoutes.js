const express = require('express');
const etapaController = require('../../controller/api/EtapaController');

const router = express.Router();

router
    .route('/teste')
    .get(etapaController.verEtapa);

module.exports = router;