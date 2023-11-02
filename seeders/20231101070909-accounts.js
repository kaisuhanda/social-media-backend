'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("accounts",[
      {
        username:"Adis",
        email:"adis@gmail.com",
        password:"12345678",
        phone:"0821421000",
        status:"unverified",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username:"Chandra",
        email:"chandra@gmail.com",
        password:"12345678",
        phone:"0821421000",
        status:"unverified",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
