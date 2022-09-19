const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users_Blocked', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserId'
      }
    },
    UserBlockedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserId'
      }
    },
    BlockDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users_Blocked',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Id",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
