var app = require('./config/custom-express')();
const config = require('./config/constant')

app.listen(4000, function(){
  console.log('Servidor rodando na porta 4000.');
});