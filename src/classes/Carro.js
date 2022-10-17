const Cliente = require("./Cliente");

module.exports = Carro = {
    id,
    nome,
    cor,
    nrportas,
    tipo,
    ano,
    placa,
    

    set Id(id){
        this._id = id;
    },

    get Id(){
        return this._id;
    },

    set Nome(nome){
        this._nome = nome
    },

    get Nome(){
        return this._nome;
    },

    set Cor(cor){
        this._cor = cor;
    },

    get Cor(){
        return this._cor;
    },

    set NrPortas(nrPortas){
        this._nrportas = nrPortas;
    },

    get NrPortas(){
        return this._nrportas;
    },

    set Tipo(tipo){
        this._tipo = tipo;
    },

    get Tipo(){
        return this._tipo;
    },

    set Ano(ano){
        this._ano = ano;
    },

    get Placa(){
        return this._placa;
    },

    set Placa(placa){
        this._placa = placa;
    },

    get Ano(){
        return this._ano;
    },

    set MarcaId(marcaId){
        this._marca_id = marcaId;
    },

    get MarcaId(){
        return this._marca_id;
    },
    
    get ClienteId (){
        return this._cliente_id
    },

    set ClienteId(clienteId){
        this._cliente_id = clienteId;
    },

}