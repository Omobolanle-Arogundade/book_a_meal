module.exports = (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
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
        msg: 'Please enter menu name',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter menu description',
      },
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: {
        args: true,
        msg: 'Please provide menu image',
      },
    },
    meals: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: {
        args: false,
        msg: 'Please enter meals array',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: {
        args: false,
        msg: 'Please add a date',
      },
    },
  });
  Menus.associate = (models) => {
    Menus.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'Users',
    });
  };
  return Menus;
};
