
const _ = require('lodash');
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');
const User = require("../models/User")(dbSequelize, Sequelize.DataTypes);

module.exports = {
    async getAll() {
        return User.findAll();
    },
    async getById(id) {
        const user = await User.findOne({
            where: {
                UserId: id
            }
        });

        return _.omit(user.dataValues, ['Password', "Slat"]);
    },
    async post({ userName, email, birthDate, password, slat }) {
        const user = {
            UserName: userName,
            Email: email,
            BirthDate: birthDate,
            RegisterDate: new Date(),
            LastConnection: new Date(),
            Password: password,
            Slat: slat
        };
        const createdUser = await User.create(user);
        return _.omit(createdUser, ['Password', "Slat"]);
    },
    async findOne({ email }) {
        return User.findOne({
            where: {
                Email: email
            }
        });
    }
}

