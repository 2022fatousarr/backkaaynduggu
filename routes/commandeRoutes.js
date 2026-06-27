const express = require("express");
const router = express.Router();

const {
 creerCommande,
  getCommandes,
  addCommande,
  updateStatutCommande,
  deleteCommande,
  getDashboardStats,
} = require("../controllers/commandeController");

// Récupérer toutes les commandes
router.get("/", getCommandes);

// Récupérer les statistiques du tableau de bord
router.get("/stats", getDashboardStats);

// Ajouter une nouvelle commande
router.post("/", creerCommande);

// Modifier le statut d'une commande
router.put("/:id", updateStatutCommande);

// Supprimer une commande
router.delete("/:id", deleteCommande);

module.exports = router;