import permissions from '../../config/permissions';

const date = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Roles', [
    {
      role_name: 'admin',
      role_description: 'This role can perform every action in the system',
      role_permissions: [
        permissions[0],
      ],
      createdAt: date,
      updatedAt: date,
    },

    {
      role_name: 'caterer',
      role_description: 'This role can perform some of admin actions in the system',
      role_permissions: [
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
      role_name: 'user',
      role_description: 'The role for user only',
      role_permissions: [
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
