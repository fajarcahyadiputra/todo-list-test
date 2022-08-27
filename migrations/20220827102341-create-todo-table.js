'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      title: Sequelize.STRING,
      activity_group_id: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      is_active: Sequelize.INTEGER(1),
      priority: Sequelize.ENUM("very-high", "high", "low", "very-low", "medium"),
      created_at: {
        type: Sequelize.STRING,
      },
      updated_at: {
        type: Sequelize.STRING,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};
