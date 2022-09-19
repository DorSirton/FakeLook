const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users_Group_Friends', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Group',
        key: 'GroupId'
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserId'
      }
    },
    JoinDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users_Group_Friends',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Id_Users_Group_Friends",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
