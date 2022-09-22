const userRepository = require('../../../repositories/user.repository');
const userHelper = require('../helper/user.helper');

const service = {
    async getAll() {
        return userRepository.getAll();
    },
    async getById(id) {
        return userRepository.getById(id);
    },
    async create({ userName, email, password, birthDate }) {
        const slat = userHelper.getSlat();
        const pass = userHelper.getPassword(slat, password);
        return userRepository.post({ userName, email, birthDate, password: pass.toString(), slat: slat.toString() });
    }
}
module.exports = service