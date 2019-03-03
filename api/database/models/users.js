module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    user_firstName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your first name!!',
      },
    },
    user_lastName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your last name!!',
      },
    },
    user_email: {
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
    user_phoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Phone number already exists!!',
      },
    },
    user_password: {
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
    user_permissions: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
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
    Users.belongsTo(models.Role, {
      foreignKey: 'role_id',
      as: 'Role',
    });

    Users.hasMany(models.Order, {
      foreignKey: 'user_id',
      as: 'Orders',
    });
  };
  return Users;
};
