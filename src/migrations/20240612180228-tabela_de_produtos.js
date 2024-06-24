'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('produto', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: true
      },
      price:{
        type:Sequelize.DECIMAL,
        allowNull:false,
      },
      estoque:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      validade:{
        type:Sequelize.DATEONLY,
        allowNull:true
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'users',
          key:'id',
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull: false,
      }

    });

  },

  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('produto');
    
  }
};
