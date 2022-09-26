module.exports = class Cliente {

    constructor(id, nome, telefone, email){
        this._id = id
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
        
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

    set Telefone(telefone){
        this._telefone = telefone;
    }

    get Telefone(){
        return this._telefone;
    }

    set Email(email){
        this._email = email;
    }

    get Email(){
        return this._email;
    }


}