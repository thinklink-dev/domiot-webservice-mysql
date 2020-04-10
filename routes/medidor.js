const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database.js');

// Insert sensor data into Habitacion table
router.post('/medidor',(req, res) => {
    let data = {
        Kwh: req.body.Kwh
    };
    let sql = "INSERT INTO medidor SET ?";
    mysqlConnection.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});


// GET All data from sensor in Habitacion
router.get('/medidor', (req, res) => {
    mysqlConnection.query('SELECT * FROM medidor', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;