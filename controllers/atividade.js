var authService = require('../service/auth-service');


module.exports = function (app) {

    app.post('/atividade', authService.authorize,  (req, res) => {
        var atividade = req.body;

        console.log(atividade);

        var connection = app.dao.connectionFactory();

        var atividadeDao = new app.dao.AtividadeDao(connection);

        atividadeDao.salvar(atividade, function (erro, result) {
            if (erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(atividade, 201, 'Atividade salva com sucesso');
                res.status(201).send(response.geraResposta());
            }
        });
    });


    app.get('/atividade', authService.authorize, (req, res) => {


        var connection = app.dao.connectionFactory();
        var atividadeDao = new app.dao.AtividadeDao(connection);

        atividadeDao.listar(function (erro, result) {
            if (erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(result, 200, 'Listagem de Atividades');
                res.status(200).send(response.geraResposta());
            }
        });
    });

    app.delete('/atividade/:id', authService.authorize,  (req, res) => {
        var params = req.params;

        var connection = app.dao.connectionFactory();

        var atividadeDao = new app.dao.AtividadeDao(connection);

        atividadeDao.deletar(params.id, function(erro, result){
            if (erro){
                res.status(500).send(erro);
            }else {
                var response = new app.dao.responseCustom(null, 200, 'Atividade deletada com sucesso');
                res.status(200).send(response.geraResposta());
            }
        });

    });

    app.put('/atividade', authService.authorize, (req, res) => {
        var atividade = req.body;

        var connection = app.dao.connectionFactory();

        var atividadeDao = new app.dao.AtividadeDao(connection);

        atividadeDao.alterar(atividade, function(erro, result){
            if(erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(null, 200, 'Atividade alterado com sucesso!');
                res.status(200).send(response.geraResposta());  
            }

        });

    })

}