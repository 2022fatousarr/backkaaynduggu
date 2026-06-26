const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },

  prix: {
    type: Number,
    required: true,
  },

  unite: {
    type: String,
    default: "kg",
  },

  image: {
    type: String,
  },

  description: {
    type: String,
  },

  stock: {
    type: Number,
    default: 0,
  },

  quantity: {
    type: Number,
    default: 1,
  },
  timestamps: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("produit", produitSchema);
