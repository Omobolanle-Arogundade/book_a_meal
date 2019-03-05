module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('Meals', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
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
        args: false,
        msg: 'Please enter meal description',
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
  });
  Meals.associate = (models) => {
    Meals.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'Users',
    });
  };
  return Meals;
};
