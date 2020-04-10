const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');

// Insert sensor data into Habitacion table
router.post('/estacion',(req, res) => {
    let data = {
        Ubicacion: req.body.Ubicacion,
        Particula2: req.body.Particula2,
        Particula10: req.body.Particula10,
        Rocio: req.body.Rocio,
        Temperatura: req.body.Temperatura,
        Humedad: req.body.Humedad,
        PresionVapor: req.body.PresionVapor,
        PresionAtmosferica: req.body.PresionAtmosferica,
        Lluvia: req.body.Lluvia
    };
    let sql = "INSERT INTO estacion SET ?";
    mysqlConnection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});


// GET All data from sensor in Habitacion
router.get('/estacion', (req, res) => {
    mysqlConnection.query('SELECT * FROM estacion', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;