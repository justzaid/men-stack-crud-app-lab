const mongoose = require('mongoose');

const clothSchema = new mongoose.Schema({
    name: String,
    size: String,
    color: String,
    availability: Boolean,
  });

  const Cloth = mongoose.model('Cloth', clothSchema);

  module.exports = Cloth;