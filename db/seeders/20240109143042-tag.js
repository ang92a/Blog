/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          tag: 'tag1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: 'tag2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: 'tag3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: 'tag4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
