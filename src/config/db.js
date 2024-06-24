const { Sequelize } = require('sequelize');
const User = require('../models/User');
const Produto = require('../models/produto');
const Entrada = require('../models/Entrada');
const Saida = require('../models/Saida');

const sequelize = new Sequelize('gerenciador', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelicida!!");
}catch(error) {
    console.log("Erro ao conectar com o banco de dados!!", error);
};



// Inicialização dos models
User.init(sequelize);
Produto.init(sequelize);

// Relacionantos dos models
Produto.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Produto, { foreignKey: 'userId' });

// -----------------------------------


module.exports = sequelize;