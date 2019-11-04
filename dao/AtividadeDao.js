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

AtividadeDao.prototype.listarPorProjeto = function(id, callback){
    this._connection.query('SELECT atividade.id, atividade.descricao, atividade.deadline, projeto_id AS projetoId, usuario.id AS usuarioId, usuario.email AS usuarioEmail, status.id AS statusId, status.descricao AS statusDescricao  FROM atividade INNER JOIN status ON atividade.status_id = status.id INNER JOIN usuario ON atividade.usuario_id = usuario.id WHERE projeto_id = ?', id,callback);
}


module.exports = function() {
    return AtividadeDao;
}