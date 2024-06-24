const {Model, DataTypes} = require('sequelize')

class Produto extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            price: DataTypes.DECIMAL,
            estoque: DataTypes.INTEGER,
            validade: DataTypes.DATEONLY,
        },{
            sequelize
        })
    }
};


module.exports = Produto;