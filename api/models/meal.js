module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catererId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  Meal.associate = (models) => { // eslint-disable-line no-unused-vars
    // associations can be defined here
  };
  return Meal;
};
