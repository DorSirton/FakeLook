const userService = require('../services/user.service');

const controller = {
    getAll: async (req, res) => {
        try {
            const users = await userService.getAll();
            res.json(users);
        } catch (error) {
            console.log(error);
        }

    },
    getById: async (req, res) => {
        try {
            const  { id } = req.params;
            console.log(req.params);
            const user = await userService.getById(id);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        const { userName, email, password, birthDate } = req.body;
        const createdUser = await userService.create({ userName, email, password, birthDate: new Date(birthDate) });
        res.json(createdUser);
    }
}

module.exports = controller