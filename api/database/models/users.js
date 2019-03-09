module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your first name!!',
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your last name!!',
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address!!',
      },
      unique: {
        args: true,
        msg: 'Sorry, Email already exists!!',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address!!',
        },
      },
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Phone number already exists!!',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password!!',
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password must be at least 8 characters');
          }
        },
      },
    },
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  });
  Users.associate = (models) => {
    // associations can be defined here
    Users.belongsTo(models.Roles, {
      foreignKey: 'roleId',
      as: 'Role',
    });

    Users.hasMany(models.Menus, {
      foreignKey: 'userId',
      as: 'Menu',
    });
    // Users.hasMany(models.Orders, {
    //   foreignKey: 'userId',
    //   as: 'Orders',
    // });
  };
  return Users;
};
