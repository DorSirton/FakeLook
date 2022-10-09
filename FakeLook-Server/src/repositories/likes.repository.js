const _ = require('lodash');
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');
const Likes = require("../models/Users_Likes")(dbSequelize, Sequelize.DataTypes);

const likeRepository = {
    async getLikesByPostId(postId){
       let likes = [];
       likes = await Likes.findAll(
                {
                    where:{
                        PostId:postId
                    }
                }
            )
       return likes;
    },

    async addLike(userId,postId) {
        const newLike = {
          UserId:userId,
          PostId:postId
        }
        return await Likes.create(newLike);
    },
    async deleteLike(userId,postId) {
        const newLike = {
          UserId:userId,
          PostId:postId
        }
        return await Likes.destroy({
            where:{
             UserId:userId,
             PostId:postId
            }
        });
    }

}
module.exports = likeRepository;