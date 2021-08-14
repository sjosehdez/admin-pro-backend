const express = require('express');
require('dotenv').config();
var cors = require('cors')


const { dbConnection } = require('./database/config');
//Crear el servidor express
const app = express();

//Configuracion de cors
app.use(cors());

//mongodb+srv://mean_user:Sr415CCaga50CIaM@cluster0.ttlfm.mongodb.net/hospitaldb
dbConnection();
console.log(process.env);

//Rutas
app.get( '/', (req, res) => {
    res.json({
        ok:true,
        msg:'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto:'+process.env.PORT);
});