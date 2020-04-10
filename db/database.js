const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'domiot',
    password: 'TLDomIoT*1',
    database: 'energydomiot',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('ThinkLink Database is connected successfully!!');
    }
  });
  
module.exports = mysqlConnection;