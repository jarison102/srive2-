const { Router } = require("express");
const rutasHabitacion = Router();
const ctrHab = require("../controller/habitacion.controller.js");
const multer =require("multer");

const rutasStorage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./public/upload/');

    },
    filename:function(req,file,callback){
        callback(null,fecha +"_"+file.originalname);
    }
});

const upload=multer({Storage:rutasStorage});

rutasHabitacion.get("/", ctrHab.obtener);
rutasHabitacion.get("/:id", ctrHab.obtenerId);
rutasHabitacion.post("/", upload.single('img'),ctrHab.add);
//rutasHabitacion.put("/:id", ctrHab.edit);

module.exports = rutasHabitacion;
