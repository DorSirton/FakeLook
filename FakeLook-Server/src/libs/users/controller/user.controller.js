
const userService = require('../services/user.service');

const controller = {
    getAll: async (req, res) => {
        const users = await userService.getAll();
        res.json(users)
    },

}

module.exports = controller