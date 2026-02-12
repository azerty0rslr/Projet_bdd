require("dotenv").config();
const express = require("express");
// Initialiser l'application back
const app = express();
const cors = require('cors');

// Désactiver le CORS
app.use(cors());
// Autoriser envoie JSON
app.use(express.json());

// mode sequelize pour la BDD (mySQL)
if (process.env.BDD_MODE === "sequelize") {
    require("./dao/sequelize/connexion").connect_sequelize();
}
// mode mongoDB pour la BDD (mongoDB - noSQL)
else if (process.env.BDD_MODE === "mongodb") {
    require("./dao/mongoose/connexion").connect_mongoose();
}

// Injecter routes
const articleRoutes = require("./routes/article-routes");
app.use(articleRoutes);

// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
