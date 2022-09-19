const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users_Likes', {
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
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Post',
        key: 'PostId'
      }
    }
  }, {
    sequelize,
    tableName: 'Users_Likes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Id_Users_Likes",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
