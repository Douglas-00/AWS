const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '',
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
