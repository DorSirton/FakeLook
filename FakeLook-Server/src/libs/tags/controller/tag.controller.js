const tagService = require('../service/tag.service');
const tagController = {

    getAll: async (req, res) => {
        try {
            const tags = await tagService.getAll()
            res.json(tags)
        }
        catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        const { userId,content} = req.body;

        const createdTag = await tagService.create(userId,content);
        res.json(createdTag);
    }
}

module.exports = tagController