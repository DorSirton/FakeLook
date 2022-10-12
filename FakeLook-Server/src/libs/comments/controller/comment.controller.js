const commentService = require('../service/comment.service');

const commentController = {
    getCommentsById: async (req, res) => {
        const postId = req.params.id
        try {
            const comments = await commentService.getCommentsById(postId)
            res.json(comments)
        }
        catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        const { content,userId,postId } = req.body;
        const createdComment = await commentService.create({ content,userId,postId });
        res.json(createdComment);
    }

}

module.exports = commentController