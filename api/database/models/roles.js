module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    role_name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role name!!',
      },
    },
    role_description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter role description!!',
      },
    },
    role_permissions: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
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
    Roles.hasMany(models.User, {
      foreignKey: 'role_id',
      as: 'Users',
    });
  };
  return Roles;
};
