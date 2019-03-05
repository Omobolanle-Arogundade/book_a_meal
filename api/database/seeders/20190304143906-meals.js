const date = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Meals', [{
    name: 'Fried Rice and Chicken',
    description: 'Grilled chicken with seasoned fried Rice',
    price: 1100,
    userId: 1,
    image_url: 'https://image1.com',
    createdAt: date,
    updatedAt: date,
  },
  {
    name: 'Pounded Yam and Vegetable soup',
    description: 'A blend of strong pounded yam and assorted vegetable soup',
    price: 500,
    userId: 1,
    image_url: 'https://image2.com',
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
