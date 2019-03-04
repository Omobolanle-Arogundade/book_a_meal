module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter meal name',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter meal price',
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Please provide meal image',
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  }, {});
  Meals.associate = (models) => {
    // associations can be defined here
    Meals.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'User',
    });
  };
  return Meals;
};
