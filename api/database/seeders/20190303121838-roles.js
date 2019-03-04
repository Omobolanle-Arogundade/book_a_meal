import permissions from '../../config/permissions';

const date = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Roles', [
    {
      name: 'admin',
      description: 'This role can perform every action in the system',
      permissions: [
        permissions[0],
      ],
      createdAt: date,
      updatedAt: date,
    },

    {
      name: 'caterer',
      description: 'This role can perform some of admin actions in the system',
      permissions: [
        permissions[1],
        permissions[3],
        permissions[4],
        permissions[5],
        permissions[6],
        permissions[8],
      ],
      createdAt: date,
      updatedAt: date,
    },

    {
      name: 'user',
      description: 'The role for user only',
      permissions: [
        permissions[1],
        permissions[4],
        permissions[6],
        permissions[7],
        permissions[8],
      ],
      createdAt: date,
      updatedAt: date,
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Roles', null, {}),
};
