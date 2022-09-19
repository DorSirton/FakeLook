const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
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
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BirthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    LastConnection: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RegisterDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ProfilePicture: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Latitude: {
      type: DataTypes.TEXT,
      allowNull: true
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
