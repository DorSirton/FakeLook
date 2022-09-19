const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Group', {
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PhotoUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Group',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Group",
        unique: true,
        fields: [
          { name: "GroupId" },
        ]
      },
    ]
  });
};
