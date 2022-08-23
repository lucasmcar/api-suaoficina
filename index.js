const express = require('express');
const clienteRouter = require('./src/routes/api/clienteApiRoutes');
const servicoRouter = require('./src/routes/api/servicoApiRoutes');
const statusRouter = require('./src/routes/api/statusApiRoutes');
const app = express();
const MYSQL_DB = require('./config/database/database');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'ejs');
const port = 4000;


//const brandsController = require('./Controller/brands/BrandsController');

MYSQL_DB
    .authenticate()
    .then(()=>{
        console.log('Conectado ao banco');
    }).catch(err =>{
        console.log(err)
    });  

app.use(clienteRouter)
app.use(servicoRouter)
app.use(statusRouter)
/*app.use(servicoController);
app.use('/', carroController);
app.use('/', marcaController);*/



app.listen(port, () =>{
    console.log('Servidor rodando');
});