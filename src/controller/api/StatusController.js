//const Status = require("../../model/Status");

exports.cadastrarStatus = (req, res) =>{
    /*let {fase} = req.body;
        if(fase != undefined || fase != ""){
            Status.create({
                fase: fase
            }).then(() => {
                res.redirect('/teste');
            }).catch(err =>{
                console.log(err);
            });
        } else {
            res.redirect('/');
        }*/
};

exports.TrazerStatus = (req, res) => {
    /*Status.findAll().then((fase) =>{
        res.render('teste', {fase})
    });*/
};

exports.testePage = (req, res) =>{
    res.render('index');
};