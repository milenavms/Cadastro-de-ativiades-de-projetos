function UsuarioDao(connection) {
    this._connection = connection;
}

UsuarioDao.prototype.salvar = function(usuario, callback) {
    this._connection.query('INSERT INTO usuario SET ? ', usuario, callback);
}

UsuarioDao.prototype.listar = function(callback) {
    this._connection.query('SELECT * FROM usuario',callback);
}

UsuarioDao.prototype.deletar = function(id, callback) {
    this._connection.query('DELETE FROM usuario WHERE id = ?', id, callback);
}

UsuarioDao.prototype.alterar = function(usuario, callback) {
    this._connection.query('UPDATE usuario SET email = ?, senha = ? WHERE id = ?', [usuario.email, usuario.senha,  usuario.id], callback);
}

module.exports = function() {
    return UsuarioDao;
}