function ResponseCustom(dado, codigo, mensagem) {
    this._dado = dado;
    this._codigo = codigo;
    this._mensagem = mensagem;
}

ResponseCustom.prototype.geraResposta = function() {
    var data =  {data: this._dado, code: this._codigo, mensagem: this._mensagem };
    return data;
}

module.exports = function() {
	return ResponseCustom;
}
