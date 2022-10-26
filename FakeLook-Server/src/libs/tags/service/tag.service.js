const tagRepository = require('../../../repositories/tag.repository');

const tagService = {
    async getAll() {
        return tagRepository.getTags()
    },
    async create( userId,content) {
        return tagRepository.post( userId,content);
    }
}
module.exports = tagService