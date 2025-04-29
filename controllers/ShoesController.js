const ShoesModel = require('../models/ShoesModel');

const createShoesDetails = async (req, res) =>{
    // getting information from request body
    const { menShoes, womenShoes, kidsShoes } = req.body;
    // creating a new ShoesModel
    try {
        const shoes = new ShoesModel({
            menShoes,
            womenShoes, 
            kidsShoes
        });
        await shoes.save();
        res.json(shoes)
    }catch (error) {
        res.json({ message: error.message });
    }
};

const retrieveShoes = (req, res) => {
    let {id} = req.params;
    if(id){
        ShoesModel.findById(id).then((shoes) =>{
            res.json(shoes);
        }).catch((err) => console.log({message:err}));
    } else {
        ShoesModel.find().then((shoes) =>{
            res.json(shoes);
        }).catch((err) => console.log({message:err}));
    }
}
module.exports = {
    createShoesDetails,
    retrieveShoes,
};