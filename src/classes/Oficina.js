module.exports = class Oficina {

    constructor(id = null, nome, codigo, email, cnpj){
        this._nome = nome;
        this._codigo = codigo;
        this._email = email;
        this._cnpj = cnpj;
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