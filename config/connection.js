const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(err => {
  if (err) {
    throw new Error(`Connection to {$connection.database} failed\n${err}`);
  }
  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
