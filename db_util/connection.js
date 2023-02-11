const mySql = require('mysql2')
const Connection = require('mysql2/typings/mysql/lib/Connection')


const pool=mySql.createPool({
    host:"localhost",
    user:"root",
    database:"students",
    password:"Uo02261836/",
    connectionLimit:2
  }).promise()

  module.exports() = pool