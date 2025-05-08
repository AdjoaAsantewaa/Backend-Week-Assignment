const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MaleShoesSchema = Schema({
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  shoesId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Shoes',
  },
});

const MaleShoesModel = mongoose.model("MaleShoes", MaleShoesSchema);
module.exports = MaleShoesModel;
