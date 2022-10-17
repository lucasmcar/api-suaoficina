const express = require('express');
const clienteRouter = require('./src/routes/api/ClienteApiRoutes');
const oficinaRouter = require('./src/routes/api/OficinaApiRoutes');
const servicoRouter = require('./src/routes/api/ServicoApiRoutes');
const etapaRouter = require('./src/routes/api/EtapaApiRoutes');
const statusRouter = require('./src/routes/api/StatusApiRoutes');
const carroRouter = require('./src/routes/api/CarroApiRoutes');
const marcaRouter = require('./src/routes/api/MarcaApiRoutes');
const enderecoRouter = require('./src/routes/api/EnderecoApiRoutes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'ejs');
const port = 4000;


app.use(clienteRouter);
//app.use(servicoRouter);
//app.use(statusRouter);
//app.use(etapaRouter);
app.use(carroRouter);
app.use(marcaRouter);
//app.use(enderecoRouter);
/*app.use(servicoController);
app.use('/', carroController);
app.use('/', marcaController);*/



app.listen(port, () =>{
    console.log('Servidor rodando');
});