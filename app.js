const express = require('express');
// const mongoose = require('mongoose');
const Product = require('./models/product');
const venteRoutes = require('./routes/vente');
const userRoutes = require('./routes/user');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

connectDB();
// mongoose.connect('mongodb+srv://mariamandoye97_db_user:uNZdLb8OjTxWoCPe@cluster0.hdy1npl.mongodb.net/?appName=Cluster0')
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/api/ventes', venteRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


// const express = require('express');

// const app = express();



// module.exports = app;