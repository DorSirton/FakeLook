const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    PostId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PhotoUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserId'
      }
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
    tableName: 'Post',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Post",
        unique: true,
        fields: [
          { name: "PostId" },
        ]
      },
    ]
  });
};
