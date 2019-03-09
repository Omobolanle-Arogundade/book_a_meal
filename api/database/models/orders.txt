module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    time: {
      type: DataTypes.DATEO,
      allowNull: {
        args: false,
        msg: 'Please add a date',
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter menu name',
      },
    },
  });
  Orders.associate = (models) => {
    Orders.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'User',
    });
    Orders.belongsTo(models.Users, {
      foreignKey: 'catererId',
      as: 'Caterer',
    });
    Orders.belongsTo(models.Meals, {
      foreignKey: 'mealId',
      as: 'Meal',
    });
  };
  return Orders;
};
