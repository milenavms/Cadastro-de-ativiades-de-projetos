function ProjetoDao(connection) {
    this._connection = connection;
}

ProjetoDao.prototype.salvar = function(projeto, callback){
    this._connection.query('INSERT INTO projeto SET ? ', projeto, callback);
}

ProjetoDao.prototype.listar = function(callback) {
    this._connection.query("SELECT * FROM  projeto", callback);
}

ProjetoDao.prototype.deletar = function(id, callback) {
    this._connection.query('DELETE FROM projeto WHERE id = ?', id, callback);
}

ProjetoDao.prototype.alterar = function(projeto, callback) {
    this._connection.query('UPDATE projeto SET descricao = ? WHERE id = ?', [projeto.descricao, projeto.id], callback);
}





module.exports = function(){
    return ProjetoDao;
}