const {Schema,model}=require("mongoose");
const HabitacionSchema=new Schema({
    
    _id:Number,
    nombreHab:String,
    capaciadad:Number,
    descripcion:String,
    wifi:Boolean,
    tv:String,
    banio:String,
    cajafuerte:String,
    nevera:String,
    valornoche:Number,
    img:String,
    estado:String,
    reserva:[{
        type:Schema.Types.ObjectId,
        ref:`Reserva`
    }]


})
HabitacionSchema.methods.setImg=function set(filename){
    this.img=`/public/${filename}`;
}
module.exports=model("Habitacion",HabitacionSchema);