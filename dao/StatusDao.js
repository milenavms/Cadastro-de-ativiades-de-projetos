function StatusDao(connection) {
    this._connection = connection;
}


StatusDao.prototype.listar = function(callback) {
    this._connection.query('SELECT * FROM status',callback);
}


module.exports = function() {
    return StatusDao;
}