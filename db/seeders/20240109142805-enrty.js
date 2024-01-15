/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Entries',
      [
        {
          title: 'Title1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Title2',
          body: 'Cras sed felis eget velit aliquet sagittis id consectetur. Eget mauris pharetra et ultrices neque ornare. Pellentesque diam volutpat commodo sed egestas egestas. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Tortor vitae purus faucibus ornare. Nibh sit amet commodo nulla facilisi nullam. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet tellus cras adipiscing enim. Turpis egestas pretium aenean pharetra. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Morbi enim nunc faucibus a pellentesque. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Erat nam at lectus urna duis convallis. Massa tempor nec feugiat nisl pretium fusce id velit. Sed vulputate odio ut enim blandit volutpat maecenas volutpat. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Mauris augue neque gravida in fermentum et sollicitudin.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  },
};
