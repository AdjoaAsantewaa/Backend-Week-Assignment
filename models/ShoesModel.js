const mongoose = require('mongoose');

const ShoesSchema = new mongoose.Schema({
  menShoes:{
    type: String,
    required: true,
  },
    womenShoes:{
        type: String,
        required: true,
    },
    kidsShoes:{
        type: String,
        required: true,
    },
  })

  const ShoesModel = mongoose.model('Shoes', ShoesSchema);
  module.exports = ShoesModel;
