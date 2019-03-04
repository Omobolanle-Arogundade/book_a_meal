module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role name!!',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role description!!',
      },
    },
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: {
        args: true,
        msg: 'Please enter authorizations!!',
      },
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  });
  Roles.associate = (models) => {
    // associations can be defined here
    Roles.hasMany(models.Users, {
      foreignKey: 'role_id',
      as: 'Users',
    });
  };
  return Roles;
};
