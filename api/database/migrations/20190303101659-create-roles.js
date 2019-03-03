module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Roles', {
    role_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    role_name: {
      type: Sequelize.STRING,
    },
    role_description: {
      type: Sequelize.STRING,
    },
    role_permissions: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Roles'),
};
