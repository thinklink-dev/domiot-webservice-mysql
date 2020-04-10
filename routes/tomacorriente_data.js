const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');

// Insert sensor data into Habitacion table
router.post('/tomacorriente',(req, res) => {
  let data = {
    Ubicacion: req.body.Ubicacion, 
    Estado_toma: req.body.Estado_toma,
    Consumo: req.body.Consumo
  };
  let sql = "INSERT INTO tomacorriente SET ?";
  mysqlConnection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});


// GET All data from sensor in Habitacion
router.get('/tomacorriente', (req, res) => {
  mysqlConnection.query('SELECT * FROM tomacorriente', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

module.exports = router;