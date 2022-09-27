const Cliente = require("./Cliente");

module.exports = class Carro {

    constructor(nome, cor, nrportas, tipo, ano, marca_id, cliente_id){
        this._nome = nome;
        this._cor = cor;
        this._nrportas = nrportas;
        this._tipo = tipo;
        this._ano = ano;
        this._marca_id = marca_id;
        this._cliente_id = cliente_id;
    }

    set Nome(nome){
        this._nome = nome
    }

    get Nome(){
        return this._nome;
    }

    set Cor(cor){
        this._cor = cor;
    }

    get Cor(){
        return this._cor;
    }

    set NrPortas(nrPortas){
        this._nrportas = nrPortas;
    }

    get NrPortas(){
        return this._nrportas;
    }

    set Tipo(tipo){
        this._tipo = tipo;
    }

    get Tipo(){
        return this._tipo;
    }

    set Ano(ano){
        this._ano = ano;
    }

    get Ano(){
        return this._ano;
    }

    set MarcaId(marcaId){
        this._marca_id = marcaId;
    }

    get MarcaId(){
        return this._marca_id;
    }
    
    get ClienteId (){
        return this._cliente_id
    }

    set ClienteId(clienteId){
        this._cliente_id = clienteId;
    }

}