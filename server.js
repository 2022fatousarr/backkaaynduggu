require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const produitRoutes = require("./routes/produitRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

connectDB();


app.use(express.json());
app.use(cors());
app.use("/produit", produitRoutes);

 // Route GET
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur mon API" });
});




// Route POST
app.post("/api/produits", (req, res) => {
  const produit = req.body;
  res.json({
    message: "Produit ajouté",
    produit
  });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur port ${PORT}`);
});