const express = require("express");
const conexionDB = require("./db");
const rutasHab=require("./routes/habitacion.routes");
const rutasRes=require("./routes/reserva.routes");
const rutasUse=require("./routes/user.routes");
const app = express();

require("dotenv").config();

//conexion
conexionDB();

//Configuraciones Basicas

app.set("name","API-Hotelia");
app.set("port",process.env.PORT || 3500);
app.set("host",process.env.HOST || 'localhost');

//midleware
app.use(express.json());
//llamado a rutas
app.use(express.static(`public`));
app.use(`./public`,express.static(`public/upload`));

app.use(`/habitaciones`,rutasHab);
app.use(`/reserva`,rutasRes);
app.use(`/user`,rutasUse);

module.exports=app;
