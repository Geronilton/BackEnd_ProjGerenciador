const {Model, DataTypes} = require('sequelize');

class Entrada extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            data_entrada: DataTypes.DATEONLY,
        },{
            sequelize
        })
    }
};


module.exports = Entrada;