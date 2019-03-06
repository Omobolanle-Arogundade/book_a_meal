const date = new Date();
module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Menus', [{
    userId: 1,
    name: 'Breakfast',
    description: 'Enjoy your breakfast',
    image_url: 'https://image2.com',
    meals: [
      1,
      2,
    ],
    date,
    createdAt: date,
    updatedAt: date,
  },
  {
    userId: 1,
    name: 'Lunch',
    description: 'Enjoy your lunch',
    image_url: 'https://image2.com',
    meals: [
      1,
      2,
    ],
    date,
    createdAt: date,
    updatedAt: date,
  }]),

  down: queryInterface => queryInterface.bulkDelete('Menus', null, {}),
};
