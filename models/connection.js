//const postgres = require('mysql2/promise');
//require('dotenv').config();

//const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//    password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DB,
//});

const { Client } = require('pg');
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env

// Configuração da conexão
const connectionString = process.env.DATABASE_URL;
const client = new Client({
    connectionString: connectionString,
});

// Conexão ao banco de dados
client.connect()
    .then(() => {
        console.log('Conexão bem-sucedida ao banco de dados');
        // Você pode executar consultas aqui
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados', err);
    });

// Ao concluir, não esqueça de encerrar a conexão
// client.end();


module.exports = client;