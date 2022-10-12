const _ = require('lodash');
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');
const Comments = require("../models/Posts_Comments")(dbSequelize, Sequelize.DataTypes);

const commentsRepository = {
    async getCommentsById(postId){
       let comments = [];
       comments = await Comments.findAll(
                {
                    where:{
                     PostId:postId
                    }
                }
            )
       return comments;
    },

    async post({ content,userId,postId }) {
        const newComment = {
            UserId: userId,
            PostId:postId,
            Content: content,
            CreateDate: Date.now()
            
        }
        return await Comments.create(newComment);
    }

}
module.exports = commentsRepository;