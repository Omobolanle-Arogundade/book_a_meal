import permissions from '../../config/permissions';
import hashPassword from '../../services/hash-password';

const date = new Date();


module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    user_firstName: 'Omobolanle',
    user_lastName: 'Arogundade',
    user_email: 'omobolanlearogundade@gmail.com',
    user_phoneNo: '09053560204',
    user_password: hashPassword('somethingfishy'),
    user_permissions: [permissions[0]],
    role_id: 1,
    createdAt: date,
    updatedAt: date,
  },
  {
    user_firstName: 'Busolami',
    user_lastName: 'Okk',
    user_email: 'busolami@gmail.com',
    user_phoneNo: '09039403443',
    user_password: hashPassword('somethingfishy'),
    user_permissions: [
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
    user_firstName: 'User',
    user_lastName: 'Okk',
    user_email: 'user@gmail.com',
    user_phoneNo: '09034843443',
    user_password: hashPassword('somethingfishy'),
    user_permissions: [
      permissions[1],
      permissions[4],
      permissions[6],
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
