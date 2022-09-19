const userRepository = require('../../../repositories/user.repository');

const service = {
    async getAll() {
        return userRepository.getAll();
    }
}

module.exports = service