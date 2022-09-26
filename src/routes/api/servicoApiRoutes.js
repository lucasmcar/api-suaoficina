const express = require('express');
const servicoController = require('../../controller/api/ServicoController');

const router = express.Router();

router
    .route('/api/servicos/')
    .get(servicoController.todosServicos);

router
    .route('/api/servico/novo')
    .post(servicoController.cadastrarServico);

router
    .route('/api/servico/:os')
    .get(servicoController.servicoPorOS);  

router
    .route('/api/servico/:veiculo')
    .get(servicoController.servicoPorCarro);

/*router
    .route('/api/servico/etapa/:nros')
    .get(servicoController.verEtapaServico);*/

module.exports = router;