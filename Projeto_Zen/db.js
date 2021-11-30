const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'http://18.231.179.110/',
    user: 'root',
    password: '12345678',
    database: 'projeto_uni'
});

const db = connection

module.exports = db;

connection.connect(function(err) {
    if (err) {
        console.error('Erro ao Conectar' + err.stack);
        return;
    }
    console.log('Conectado com Sucesso ao MYSQL' + connection.threadId);
});
