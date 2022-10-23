const userRepository = require('../../../repositories/user.repository');
const refreshTokenRepository = require('../../../repositories/refresh-token.repository');

const userHelper = require('../../users/helper/user.helper');
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    console.log("ACCESS_TOKEN_SECRET");
    console.log(process.env.ACCESS_TOKEN_SECRET);
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 1000 * 60 * 60 * 2 });
}

const service = {
    async login(email, password) {
        const foundUser = await userRepository.findOne({ email });
        if (foundUser === null)
            throw new Error("User not found.");

        const isValid = userHelper.validPassword(foundUser, password);
        if (!isValid)
            throw new Error("Wrong Password");

        const jwtuser = { email: foundUser.Email, userId: foundUser.UserId };
        const accessToken = generateAccessToken(jwtuser);
        const refreshToken = jwt.sign(jwtuser, process.env.REFRESH_TOKEN_SECRET);

        await this.removeRefreshToken(jwtuser.userId);
        await this.createRefreshToken(jwtuser.userId, refreshToken);
        return { accessToken, refreshToken };
    },
    async removeRefreshToken(userId) {
        return refreshTokenRepository.remove(userId);
    },
    async createRefreshToken(userId, refreshToken) {
        return refreshTokenRepository.create(userId, refreshToken);
    }
}

module.exports = service