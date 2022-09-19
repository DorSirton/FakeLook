const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users_Friends', {
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
    UserFriendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserId'
      }
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users_Friends',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Id_Users_Friends",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
