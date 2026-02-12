const DAOFactory = require("../dao/dao-factory");
const { makeService } = require("./service-helper");

module.exports = {

    // Fonction du métier
    createArticle: async () => {
        // Insert l'article créé
        const newArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("200", "L'article a été créé avec succès", newArticle);
    },

    getAll: async () => {

        // Selection tous les articles
        const articles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Tout les jeux ont été récupérés", articles);
    },

    async getById(id) {
        // Selection de l'article par l'id
        const article = await DAOFactory.getDAOArticle().selectById(id);

        if (!article) {
            // Codes repris du TP avec l'API back
            return makeService("721", "Article introuvable", null);
        }

        return makeService("200", "Article récupéré avec succès", article);
    },


    async updateArticle(id, articleData) {
        // Selection de l'article par l'id et mets à jour avec les data du body articleData
        const updated = await DAOFactory.getDAOArticle().update(id, articleData);

        if (!updated) {
            // Codes repris du TP avec l'API back
            return makeService("721", "Impossible de modifier un article inexistant", null);
        }

        return makeService("200", "Article modifié avec succès", updated);
    },

    async deleteArticle(id) {
        // Supprime l'article correspondant à l'ID
        const deleted = await DAOFactory.getDAOArticle().delete(id);

        if (!deleted) {
            // Codes repris du TP avec l'API back
            return makeService("721", "Impossible de supprimer un article inexistant", null);
        }

        return makeService("200", "Article supprimé avec succès", null);
    }

}
