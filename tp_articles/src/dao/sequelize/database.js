const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'db_article',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = sequelize