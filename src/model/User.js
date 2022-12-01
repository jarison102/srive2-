const{Schema,model}=require("mongoose");
const UserSchema =new Schema({
    _id:Number,
    tipodoc:String,
    nombre:String,
    apellido:String,
    fechaNacimiento:Date,
    genero:String,
    email: {type: String , Require: true, unique: true},
    telefono:Number,
    paisorigen:String,
    password:String,
    tipouser:String,
    img:String,
    reserva:String,

   reserva:[{
    type:Schema.Types.Number,
    ref:`reserva`
    
   }]
})

module.exports=model("User",UserSchema);