const likeService = require('../service/like.service');

const likeController = {
    
    createLike: async (req, res) => {
        const {userId,postId }= req.body;
        const createdLike = await likeService.addLike(userId,postId);
        res.json(createdLike);
    },
    getAllLikes:async(req, res) => {
        const postId= req.params.id
        const Likes = await likeService.getLikesByPostId(postId);
        res.json(Likes);
    },

}

module.exports = likeController