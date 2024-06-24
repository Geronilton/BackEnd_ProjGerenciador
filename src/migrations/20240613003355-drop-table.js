'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('Entradas'),
      queryInterface.dropTable('Saidas')
    ]);

  },

    down (queryInterface, Sequelize) {
      // Normalmente, você não iria recriar as tabelas no `down` de uma migração de drop.
      // Mas para fins de completude, vamos recriar as tabelas como estavam.
  
      return Promise.all([
        queryInterface.createTable('Entradas', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          // Adicione outras colunas conforme necessário
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
        }),
        queryInterface.createTable('Saidas', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          // Adicione outras colunas conforme necessário
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
        })
      ]);
    }
};
