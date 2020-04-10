/* CONFIGURACION WEBSERVIOE WITH NODEJS, EXPRESS AND MYSQL */

const express = require('express');
const app = express();

// Settings - SET PORT
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/sensordata.js'));  /* Boton Pulsador Interruptor */
app.use(require('./routes/tomacorriente_data.js')); /* Toma Creativa */
app.use(require('./routes/riego.js')); /* Sensor EC-5S Agroriego */
app.use(require('./routes/medidor.js')); /* Medidor Inteligente */
app.use(require('./routes/estacion.js')); /* Estacion Metereologica */

// Start the WebService
app.listen(app.get('port'), () => {
    console.log('Webservice listening on port 3000!');
});