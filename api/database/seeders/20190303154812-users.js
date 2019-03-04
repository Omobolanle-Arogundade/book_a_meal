import permissions from '../../config/permissions';
import hashPassword from '../../helpers/hash-password';

const date = new Date();


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    firstName: 'Omobolanle',
    lastName: 'Arogundade',
    email: 'omobolanlearogundade@gmail.com',
    phoneNo: '09053560204',
    password: hashPassword('somethingfishy'),
    permissions: [permissions[0]],
    role_id: 1,
    createdAt: date,
    updatedAt: date,
  },
  {
    firstName: 'Busolami',
    lastName: 'Okk',
    email: 'busolami@gmail.com',
    phoneNo: '09039403443',
    password: hashPassword('somethingfishy'),
    permissions: [
      permissions[1],
      permissions[3],
      permissions[4],
      permissions[5],
      permissions[6],
      permissions[8],
    ],
    role_id: 2,
    createdAt: date,
    updatedAt: date,
  },
  {
    firstName: 'User',
    lastName: 'Okk',
    email: 'user@gmail.com',
    phoneNo: '09034843443',
    password: hashPassword('somethingfishy'),
    permissions: [
      permissions[1],
      permissions[4],
      permissions[7],
      permissions[8],
    ],
    role_id: 3,
    createdAt: date,
    updatedAt: date,
  },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
