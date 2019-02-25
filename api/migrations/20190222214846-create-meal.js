module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Meals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    price: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    catererId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    imageUrl: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    size: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Meals'),
};
