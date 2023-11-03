'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user1',
        password: 'password1',
        email: 'user1@example.com',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        password: 'password2',
        email: 'user2@example.com',
        phone: '9876543210',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user3',
        password: 'password3',
        email: 'user3@example.com',
        phone: '135792468',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    
  }
};
