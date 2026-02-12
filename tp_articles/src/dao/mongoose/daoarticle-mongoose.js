const IDAOArticle = require("../idaoarticle");
const Article = require("./article-model");

class DAOArticleMongoose extends IDAOArticle {
    /**
     * Override explicitement si la methode existe dans le parent, même fonction que sur la demo
     */
    async insert(article) {
        // Intancier l'objet dans mongoDB
        const newArticle = new Article(article);
        // Save
        return await newArticle.save();
    }

    /**
     * Override explicitement si la methode existe dans le parent, même fonction que sur la demo
     */
    async selectAll() {
        // Selectionne tous les articles
        return await Article.find();
    }

    async selectById(id) {
        // Cherche par ID l'article
        return await Article.findById(id);
    }

    async update(id, article) {
        // Mets à jour l'article avec l'ID en question et affiche le nouvel article
        return await Article.findByIdAndUpdate(id, article, { new: true });
    }

    async delete(id) {
        // Supprime l'article qui à l'ID correspondant
        return await Article.findByIdAndDelete(id);
    }
}

module.exports = DAOArticleMongoose;
