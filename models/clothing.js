const mongoose = require('mongoose');

const clothSchema = new mongoose.Schema({
    name: String,
    addedToCart: Boolean,
  });

  const Cloth = mongoose.model('Cloth', clothSchema);

  module.exports = Cloth;