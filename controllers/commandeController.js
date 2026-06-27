const Commande = require("../models/commande");

// Récupérer toutes les commandes
const getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().sort({ createdAt: -1 });
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajouter une nouvelle commande
const addCommande = async (req, res) => {
  try {
    const commande = new Commande(req.body);
    await commande.save();

    res.status(201).json(commande);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Modifier le statut d'une commande
const updateStatutCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(
      req.params.id,
      { statut: req.body.statut },
      { new: true }
    );

    if (!commande) {
      return res.status(404).json({ message: "Commande introuvable" });
    }

    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une commande
const deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);

    if (!commande) {
      return res.status(404).json({ message: "Commande introuvable" });
    }

    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDashboardStats = async (req, res) => {
  try {
    const commandes = await Commande.find();

    const totalCommandes = commandes.length;

    const revenus = commandes.reduce((total, commande) => {
      return total + commande.total;
    }, 0);

    res.json({
      totalCommandes,
      revenus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCommandes,
  addCommande,
  updateStatutCommande,
  deleteCommande,
  getDashboardStats,
  
};