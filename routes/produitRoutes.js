const express = require("express");
const router = express.Router();

const {
  getProduits,
  addProduit,
} = require("../controllers/produitController");

router.get("/", getProduits) 
router.post("/", addProduit);

module.exports = router;