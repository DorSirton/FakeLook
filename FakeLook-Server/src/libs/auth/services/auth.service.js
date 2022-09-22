const userRepository = require('../../../repositories/user.repository');
const refreshTokenRepository = require('../../../repositories/refresh-token.repository');

const userHelper = require('../../users/helper/user.helper');

const service = {
    async login(email, password) {
        const foundUser = await userRepository.findOne({ email });
        if (foundUser === null)
            throw new Error("User not found.");

        const isValid = userHelper.validPassword(foundUser, password);
        if (!isValid)
            throw new Error("Wrong Password");

        return foundUser;
    },
    async removeRefreshToken(userId) {
        return refreshTokenRepository.remove(userId);
    },
    async createRefreshToken(userId, refreshToken) {
        return refreshTokenRepository.create(userId, refreshToken);
    }
}

module.exports = service