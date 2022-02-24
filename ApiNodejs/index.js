require ("./config/conexion");

var cors = require('cors')
const express = require ("express");
const port = (process.env.port || 3000);


//express
const app = express();

//admitir
app.use(express.json())
app.use(cors())


// config puerto
app.set("port", port)

// rutas

app.use("/api" ,require("./rutas"))

//iniciar express
app.listen(app.get("port"),(error)=>{
    if (error){
        console.log("error al iniciar el servidor")
    }
    else {
        console.log("servidor iniciado en el puerto" +port)
    }
});