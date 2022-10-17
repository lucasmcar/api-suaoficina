const Foto = require('./Foto');

module.exports = class Orcamento  {

    constructor(id = null,  titulo, descricao, tipo,  preco, dtentrada, nrdias, dtEntrga){
        this._fotos = [];
        this._titulo = titulo;
        this._edescricao = descricao;
        this._tipo = tipo;
        this._preco = preco;
        this._dtEntrada = dtentrada;
        this._nrDias = nrdias;
        this._dtEntrega = dtentrega;
    }

    set Fotos(foto){
        let f = new Foto
    }

    set Id(id){
        this._id = id;
    }

    get Id(){
        return this._id;
    }

    set Nome(nome){
        this._nome = nome
    }

    get Nome(){
        return this._nome;
    }

    set Codigo(codigo){
        this._codigo = codigo;
    }

    get Codigo(){
        return this._codigo;
    }

    set Email(email){
        this._email = email;
    }

    get Email(){
        return this._email;
    }

    set Cnpj(cnpj){
        this._cnpj = cnpj;
    }

    get Cnpj(){
        return this._cnpj;
    }

}