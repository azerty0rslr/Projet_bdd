const DAOArticleMock = require("./mock/daoarticle-mock");
module.exports = {

    /**
     * Retourne un IDAOArticle
     */
    getDAOArticle: () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOArticleSequelize();
        }

        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose");
            return new DAOArticleMongoose();
        }

        // MODE : Mock
        else if (process.env.BDD_MODE === "mock") {
            const DAOArticleMock = require("./mock/daoarticle-mock");
            return new DAOArticleMock();
        }
        // Fallback
        const DAOArticleMock = require("./mock/daoarticle-mock");
        return new DAOArticleMock();
    }
}
