const reserva=require('../model/reserva');


exports.obtener = async (req, res) => {
    try {
        const Reservas=await reserva.find();
        res.status(200).json(Reservas);
    } catch (error) {
       res.status(500).json(error);
    }
}