module.exports = function(app){

    app.post('/atividade', (req, res) => {
        var atividade = req.body;

        console.log(atividade);

        var connection = app.dao.connectionFactory();

        var atividadeDao = new app.dao.AtividadeDao(connection);

        atividadeDao.salvar( atividade, function(erro, result){
            if (erro){
                res.status(500).send(erro);
            }else{
                var response = new app.dao.responseCustom(atividade, 201, 'Atividade salva com sucesso');
                res.status(201).send(response.geraResposta());
            }
        })
    })
}