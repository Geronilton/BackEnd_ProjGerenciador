const {Model, DataTypes} = require('sequelize');

class Saida extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            data_Saida: DataTypes.DATEONLY,
        },{
            sequelize
        })
    }
};


module.exports = Saida;