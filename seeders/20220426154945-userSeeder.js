'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'admin',
      password: await bcrypt.hash('12345678', 10),
      email: "admin@gmail.com"
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
