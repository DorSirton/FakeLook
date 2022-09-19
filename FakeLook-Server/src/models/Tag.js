const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tag', {
    TagId: {
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
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TagName: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'Tag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Tag",
        unique: true,
        fields: [
          { name: "TagId" },
        ]
      },
    ]
  });
};
