 const mysql = require("mysql2")
 const connection = require("./configuracoes.json")
 

 const desafio_db = mysql.createPool({
     connectionLimit: connection.banco.connectionLimit,
     host: connection.banco.host,
     user: connection.banco.usuario,
     password: connection.banco.senha,
     database: connection.banco.databaseDesafio,
     dateStrings: connection.banco.dateStrings,
 })
 
 module.exports = {desafio_db}