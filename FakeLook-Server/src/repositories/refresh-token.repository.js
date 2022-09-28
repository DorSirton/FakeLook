
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');
const RefreshToken = require("../models/RefreshToken")(dbSequelize, Sequelize.DataTypes);

const repository = {
    async create(userId, refreshToken) {
        const refresh = {
            UserId: userId,
            RefreshToken: refreshToken,
            CreatedDate: new Date()
        }
        const createdRefreshToken = await RefreshToken.create(refresh);
        return createdRefreshToken;
    },
    async remove(userId) {
        return RefreshToken.destroy({
            where: {
                UserId: userId
            }
        });

    }
}
module.exports = repository;