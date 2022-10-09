const likeRepository = require('../../../repositories/likes.repository');
const likeService = {
   async getLikesByPostId(postId)
   {
       return likeRepository.getLikesByPostId(postId);
   },
   async addLike(userId,postId){
    
    likeRepository.getLikesByPostId(postId).then(res=>{
    res.forEach(element => {
        if(element.UserId==userId)
        return likeRepository.deleteLike(userId,postId);
    });
   })
    return likeRepository.addLike(userId,postId);
   }
}
module.exports = likeService