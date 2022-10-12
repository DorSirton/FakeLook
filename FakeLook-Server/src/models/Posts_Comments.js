const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Posts_Comments', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Post',
        key: 'PostId'
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
    
    Content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      CreateDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
  }, {
    sequelize,
    tableName: 'Posts_Comments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Id_Posts_Comments",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      }
      //{
      //  name: "PK_Posts_Comments",
      //  unique: true,
      //  fields: [
      //    { name: "Id" },
      //  ]
      //},
    ]
  });
};
