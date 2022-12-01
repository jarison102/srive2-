const Habitacion=require('../model/Habitacion');

exports.obtener = async (req, res) => {
    try {
        const habitaciones=await Habitacion.find();
        res.status(200).json(habitacion);
    } catch (error) {
       res.status(500).json(error);
    }
};

exports.obtenerId = async (req,res)=>{
    try {
        const id = req.params.id;
        const habitaciones= await Habitacion.findById(id).populate('reserva',{
            "_id":1,
            "fechaentrada":1,
            "cantidadNoches":1,
            "feReserva":1,
            "TotalReserva":1
        });
        res.status(200).json(habitaciones);

    } catch (error) {
        res.status(500).json(error);
    }
}


exports.add = async (req,res)=>{
    try {
        const newhabitacion =new Habitacion (req.body, req.file);
        if(req.file){
            const {filename}=req.file;
            newhabitacion.setImg(filename);
        }
            await newhabitacion.save();
            res.status(200).json(newhabitacion);      
    } catch (error) {
        res.status(500).json(error);
        
    }
}