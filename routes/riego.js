const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');

// Insert sensor data into Habitacion table
router.post('/riego',(req, res) => {
    let data = {
        Valor_Humedad: req.body.Valor_Humedad,
        Nivel_Bateria: req.body.Nivel_Bateria
    };
    let sql = "INSERT INTO riego SET ?";
    mysqlConnection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});


// GET All data from sensor in Habitacion
router.get('/riego', (req, res) => {
    mysqlConnection.query('SELECT * FROM riego', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;