function AtividadeDao(connection){
    this._connection = connection;
}

AtividadeDao.prototype.salvar = function( atividade, callback){
    this._connection.query(' INSERT INTO   atividade SET descricao = ?, deadline = ?, projeto_id = ?, usuario_id = ?, status_id = ? ', 
    [atividade.descricao, atividade.deadline, atividade.projetoId, atividade.usuario.id, atividade.status.id], callback);
}

AtividadeDao.prototype.listar = function(callback){
    this._connection.query('SELECT * FROM atividade', callback);
}

AtividadeDao.prototype.deletar = function(id, callback){
    this._connection.query('DELETE FROM atividade WHERE id = ?', id, callback);
}

AtividadeDao.prototype.alterar = function(atividade, callback){
    this._connection.query('UPDATE atividade  SET descricao = ?, deadline = ?, projeto_id = ?, usuario_id = ?, status_id = ? WHERE id = ?',
     [atividade.descricao, atividade.deadline, atividade.projetoId, atividade.usuario.id, atividade.status.id, atividade.id], callback );
}


module.exports = function() {
    return AtividadeDao;
}