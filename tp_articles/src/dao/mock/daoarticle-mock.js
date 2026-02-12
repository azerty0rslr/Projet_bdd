const IDAOArticle = require("../idaoarticle");

// Puisqu'il n'y a pas de base de données les données sont stockées en local
let DB_Articles = [
    { id: '1', title: 'Premier article', desc: 'Contenu du premier article', author: 'Isaac', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' },
    { id: '2', title: 'Deuxième article', desc: 'Contenu du deuxième article', author: 'Sanchez', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' },
    { id: '3', title: 'Troisième article', desc: 'Contenu du troisième article', author: 'Toto', imgPath: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg' }
];

class DAOArticleMock extends IDAOArticle {

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        // ajoute dans le tableau
        DB_Articles.push(article);
        return article;
    }

    async selectAll() {
        // renvoie tout le tableau
        return DB_Articles;
    }

    async selectById(id) {
        // renvoie du tableau l'élément avec l'id en question
        return DB_Articles.find(a => a.id === id);
    }

    async update(id, article) {
        // cherche l'élément à l'ID donné, le remplace par l'article écrit dans le body et renvoie le résultat
        const index = DB_Articles.findIndex(a => a.id === id);
        DB_Articles[index] = article;
        return article;
    }

    async delete(id) {
        // supprime l'article présent à l'ID rentré
        DB_Articles = DB_Articles.filter(a => a.id !== id);
        return true;
    }
}

module.exports = DAOArticleMock;
