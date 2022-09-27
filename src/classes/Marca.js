module.exports = class Marca {

    constructor(id, nome){
        this._id = id
        this._nome = nome;
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
}