const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password@A',
    database: 'projeto_uni',
    port:3306
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
