const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('RefreshToken', {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //     model: 'User',
            //     key: 'UserId'
            //   }
        },
        RefreshToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        CreatedDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'RefreshToken',
        schema: 'dbo',
        timestamps: false,
        indexes: [
            {
                name: "PK_RefreshToken",
                unique: true,
                fields: [
                    { name: "Id" },
                ]
            },
        ]
    });
};
