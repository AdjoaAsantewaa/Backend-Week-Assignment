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

const updateShoes = (req, res) =>{
    // get id from the request body
    const { id } = req.params;
    // get the updated information from the request body
    const { menShoes, womenShoes, kidsShoes } = req.body;
    // find the shoes by id and update it
   
    ShoesModel.findById(id).then((shoes) =>{
            if (shoes) {
                shoes.menShoes = menShoes;
                shoes.womenShoes = womenShoes;
                shoes.kidsShoes = kidsShoes;

                shoes.save()
                     .then((updatedShoes) => res.json(updatedShoes))
                     .catch((err) => res.status(500).json({ message: err.message }));
            } else {
                res.status(404).json({ message: 'Shoes not found' });
            }
        });
    };

    const deleteShoesDetails = async (req, res) => {
        try {
            const deleteShoesId = await ShoesModel.findByIdAndDelete(req.params.id);

            if (deleteShoesId) {
                res.status(200).json({ message: 'Shoes deleted successfully' });
            } else {
                res.status(404).json({ message: 'Shoes not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


module.exports = {
    createShoesDetails,
    retrieveShoes,
    updateShoes,
    deleteShoesDetails,
};