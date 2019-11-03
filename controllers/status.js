var authService = require('../service/auth-service');

module.exports = function(app) {

    app.get('/status', authService.authorize, (req, res) => {
        var connection = app.dao.connectionFactory();

        var statusDao = new app.dao.StatusDao(connection);

        statusDao.listar(function(erro, result) {
            if(erro) {
                res.status(500).send(erro);
            } else {
                var response = new app.dao.responseCustom(result, 200, 'Listagem de status!');
                res.status(200).send(response.geraResposta());
            }
        });
    });

}