const authService = require('../service/auth-service');

module.exports = function(app) {
    
    app.post('/usuario', authService.authorize, (req, res) => {
        var usuario = req.body;
        
        var connection = app.dao.connectionFactory();

        var usuarioDao = new app.dao.UsuarioDao(connection);

        usuarioDao.salvar(usuario, function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                //var data =  {data: usuario, code: 201, mensagem: 'Usuário cadastrado com sucesso!'}
                var response = new app.dao.responseCustom(usuario, 201, 'Usuário cadastrado com sucesso!');
                res.status(201).send(response.geraResposta());
            }
        });
    });

    app.get('/usuario', authService.authorize,(req, res) => {
        var connection = app.dao.connectionFactory();

        var usuarioDao = new app.dao.UsuarioDao(connection);

        usuarioDao.listar(function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(result, 200, 'Listagem de usuarios!');
                res.status(200).send(response.geraResposta());
            }
        });
    });


    app.delete('/usuario/:id', authService.authorize, (req, res)=> {
        var params = req.params;

        var connection = app.dao.connectionFactory();

        var usuarioDao = new app.dao.UsuarioDao(connection);

        usuarioDao.deletar(params.id, function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(null, 200, 'Usuário excluído com sucesso!');
                res.status(200).send(response.geraResposta());
            }
        })
    });

    app.put('/usuario', authService.authorize, (req, res)=>{
        var usuario = req.body;
        
        var connection = app.dao.connectionFactory();

        var usuarioDao = new app.dao.UsuarioDao(connection);

        usuarioDao.alterar(usuario, function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                //var data =  {data: usuario, code: 201, mensagem: 'Usuário cadastrado com sucesso!'}
                var response = new app.dao.responseCustom(null, 200, 'Usuário alterado com sucesso!');
                res.status(200).send(response.geraResposta());  
            }
        });
    });


    app.post('/authenticate', authService.authorize, (req, res) => {
        var usuario = req.body;

        var connection = app.dao.connectionFactory();

        var usuarioDao = new app.dao.UsuarioDao(connection);

        usuarioDao.login(usuario, function(erro, result) {
            if(erro) {
                var response = new app.dao.responseCustom(null, 404, 'Senha ou email inválidos!');
                res.status(404).send(response);
                return;
            } else {

                var users = Object.values(JSON.parse(JSON.stringify(result)))
                if(users.length == 0) {
                    var response = new app.dao.responseCustom(null, 404, 'Senha ou email inválidos!');
                    res.status(404).send(response);
                    return;
                } 



    
                const token = authService.generateToken(users[0]);

                var data = { 
                    token: token,
                    usuario: result
                };

                //var response = new app.dao.responseCustom(data, 404, 'Senha ou email inválidos!');
                res.status(201).send(data);
                return;
            }
        })
    })
}