require('dotenv').config(); 
const express = require('express');
const db = require('./models');


//Crear servidor
const app = express();
const port = process.env.PORT || 3000;

//Ruta principal
app.get('/', (req, res) => {

  res.send('¡Servidor funcionando correctamente! 🚀');

});

//Iniciar servidor
app.listen(port, () => {
    try {
        db.sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        db.sequelize.sync();
        console.log('Sincronización de modelos con la base de datos.');
    }
    catch (error) {
        console.error('No se puede conectar a la base de datos:',
        error);
    }
    console.log(`Servidor corriendo en http://localhost:${port}`);

});
