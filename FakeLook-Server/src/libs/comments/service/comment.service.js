const commentsRepository = require('../../../repositories/comments.repository');
const commentService = {
    async getAll() {
        // return userRepository.getAll();
    },
    async getById(id) {
        // return userRepository.getById(id);
    },

    async create({ content,userId,postId }) {
        return commentsRepository.post({ content,userId,postId });
    },

    async getCommentsById(postId){
        const commentsArray = await commentsRepository.getCommentsById(postId);
        return commentsArray;     
    }
}
module.exports = commentService