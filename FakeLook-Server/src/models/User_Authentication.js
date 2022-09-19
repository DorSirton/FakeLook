const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_Authentication', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'User_Authentication',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User_Authentication",
        unique: true,
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
