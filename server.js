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
app.use("/api/produits", produitRoutes);

 // Route GET
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur Kaay Nduggu" });
});



app.listen(PORT, () => {
  console.log(`Serveur démarré sur port ${PORT}`);
});