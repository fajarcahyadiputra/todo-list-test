'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      title: Sequelize.STRING,
      email: Sequelize.STRING,
      deleted_at: Sequelize.STRING,
      created_at: {
        type: Sequelize.STRING,
      },
      updated_at: {
        type: Sequelize.STRING,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('activities');
  }
};
