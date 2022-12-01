const reserva=require('../model/user');


exports.obtener = async (req, res) => {
    try {
        const User=await user.find();
        res.status(200).json(User);
    } catch (error) {
       res.status(500).json(error);
    }
}