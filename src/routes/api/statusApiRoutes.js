const express = require('express');
const statusController = require('../../controller/api/StatusController');

const router = express.Router();


router
    .route('/api/status/:idservico')
    .get(statusController.verStatusPorServico);