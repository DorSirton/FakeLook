const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User', {
    UserId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BirthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    LastConnection: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RegisterDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Slat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProfilePicture: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    tableName: 'User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User",
        unique: true,
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
