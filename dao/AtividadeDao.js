function AtividadeDao(connection){
    this._connection = connection;
}

AtividadeDao.prototype.salvar = function( atividade, callback){
    this._connection.query(' INSERT INTO   atividade SET descricao = ?, deadline = ?, projeto_id = ?, usuario_id = ?, status_id = ? ', 
    [atividade.descricao, atividade.deadline, atividade.projetoId, atividade.usuario.id, atividade.status.id], callback);
}


module.exports = function() {
    return AtividadeDao;
}