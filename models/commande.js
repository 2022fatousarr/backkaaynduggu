const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
    },

    telephone: {
      type: String,
      required: true,
    },

    adresse: {
      type: String,
      required: true,
    },

    produits: [
      {
        nom: {
          type: String,
          required: true,
        },
        prix: {
          type: Number,
          required: true,
        },
        quantite: {
          type: Number,
          required: true,
        },
      },
    ],

    total: {
      type: Number,
      required: true,
    },

    statut: {
      type: String,
      enum: ["En attente", "En cours", "Livré", "Annulé"],
      default: "En attente",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Commande", commandeSchema);