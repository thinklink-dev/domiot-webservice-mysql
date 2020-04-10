const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');

// Insert sensor data into Habitacion table
router.post('/habitacion',(req, res) => {
  let data = {
    Ubicacion: req.body.Ubicacion, 
    Estado_luz: req.body.Estado_luz,
    Estado_sensor: req.body.Estado_sensor,
    Consumo: req.body.Consumo,
    Temperatura: req.body.Temperatura,
    Humedad: req.body.Humedad,
    Rocio: req.body.Rocio
  };
  let sql = "INSERT INTO habitacion SET ?";
  mysqlConnection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});


// GET All data from sensor in Habitacion
router.get('/habitacion', (req, res) => {
  mysqlConnection.query('SELECT * FROM habitacion', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

module.exports = router;