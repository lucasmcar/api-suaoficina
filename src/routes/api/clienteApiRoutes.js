const express = require('express');
const clienteController = require('../../controller/api/ClienteController');

const router = express.Router();

router
    .route('/teste')
    .get(clienteController.testePage);

router
    .route('/api/cliente')
    .get(clienteController.verClientes)

router
    .route('/api/cliente/novo')
    .post(clienteController.inserirCliente);  

router
    .route('/api/cliente/:id')
    .get(clienteController.verClientePeloId)
    .patch(clienteController.atualizarCliente)
    .delete(clienteController.removerCliente);

module.exports = router;