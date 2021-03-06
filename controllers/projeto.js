var authService = require('../service/auth-service');

module.exports = function(app){

    app.post('/projeto' ,authService.authorize, (req, res) => {
        var projeto = req.body;

        var connection = app.dao.connectionFactory();

        var projetoDao = new app.dao.ProjetoDao(connection);

        projetoDao.salvar(projeto, function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(projeto, 200, 'Projeto cadastrado com sucesso!');
                res.status(200).send(response.geraResposta());
            }
        });
    });

    app.get('/projeto', authService.authorize, (req, res) => {
        var connection = app.dao.connectionFactory();

        var projetoDao = new app.dao.ProjetoDao(connection);

        projetoDao.listar(function(erro, result) {
            if(erro){
                res.status(500).send(erro);
            }else {
                var response =  new app.dao.responseCustom(result, 200, 'Listagem de Projeto');
                res.status(200).send(response.geraResposta());
            }
        });
    });

    app.delete('/projeto/:id', authService.authorize, (req, res) => {
        var params = req.params;

        var connection = app.dao.connectionFactory();

        var projetoDao = new app.dao.ProjetoDao(connection);

        projetoDao.deletar(params.id, function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(null, 200, 'Projeto excluído com sucesso!');
                res.status(200).send(response.geraResposta());
            }
        })

    })

    app.put('/projeto', authService.authorize, (req, res)=>{
        var projeto = req.body;
        
        var connection = app.dao.connectionFactory();

        var projetoDao = new app.dao.ProjetoDao(connection);

        projetoDao.alterar(projeto, function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                 var response = new app.dao.responseCustom(null, 200, 'Projeto alterado com sucesso!');
                res.status(200).send(response.geraResposta());  
            }
        });
    })


}