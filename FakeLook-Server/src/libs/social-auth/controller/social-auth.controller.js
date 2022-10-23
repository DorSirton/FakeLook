const socialAuthService = require('../services/social-auth.service');
const authService = require('../../auth/services/auth.service');

const controller = {
    registerOrLogin: async (req, res) => {
        const { email, password, userName } = req.body;
        console.log(email, password);

        if (!await socialAuthService.isEmailExist(email, password)) {
            console.log('create user');
            const createdUser = await socialAuthService.create({ email, password, userName, birthDate: new Date(null) });
            console.log(createdUser);
            if (!createdUser)
                throw Error('user not created successfully');
        }

        const { accessToken, refreshToken } = await authService.login(email, password);
        console.log(email, password);
        res.json({ accessToken, refreshToken });
    }
}

module.exports = controller