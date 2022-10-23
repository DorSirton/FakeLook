const authService = require('../services/auth.service');
const userService = require('../../../libs/users/services/user.service');
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    console.log("ACCESS_TOKEN_SECRET");
    console.log(process.env.ACCESS_TOKEN_SECRET);
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 1000 * 60 * 60 * 2 });
}

const controller = {
    login: async (req, res) => {
        const { email, password } = req.body;
        const { accessToken, refreshToken } = await authService.login(email, password);

        res.json({ accessToken, refreshToken });
    },
    me: async (req, res) => {
        const { userId } = req.user;
        const user = await userService.getById(userId);
        res.json(user);
    }
}

module.exports = controller