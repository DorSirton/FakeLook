const userRepository = require('../../../repositories/user.repository');
const userHelper = require('../../users/helper/user.helper');

const service = {
    async isEmailExist(email, password) {
        const foundUser = await userRepository.findOne({ email });
        if (foundUser === null)
            return false;

        const isValid = userHelper.validPassword(foundUser, password);
        if (!isValid)
            return false;

        return true;
    },
    async create({ userName, email, password, birthDate }) {
        const slat = userHelper.getSlat();
        const pass = userHelper.getPassword(slat, password);
        return userRepository.post({ userName, email, birthDate, password: pass.toString(), slat: slat.toString() });
    }
}

module.exports = service