const{Schema,model}=require("mongoose");
const reservaSchema = new Schema({
   fechaentrada:Date,
   fechasalida:Date,
   cantidaddenoches:Number,
   fechareserva:Date,
   totalReserva:Number,
   user:[{
    type:Schema.Types.Number,
    ref:`user`
   }],
   habitacion:[{
    type:Schema.Types.Number,
    ref:`Habitacion`
    
   }]
});

module.exports=model("reserva",reservaSchema);