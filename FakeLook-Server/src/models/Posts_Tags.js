const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Posts_Tags', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TagId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Posts_Tags',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Id_Posts_Tags",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
