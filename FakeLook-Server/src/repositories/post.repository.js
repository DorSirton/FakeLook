const _ = require('lodash');
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');
const Post = require("../models/Post")(dbSequelize, Sequelize.DataTypes);

const postRepository = {
    async getPostsById(usersId){
       let posts = [];
       posts = await Post.findAll(
                {
                    where:{
                     UserId:usersId
                    }
                }
            )
       return posts;
    },

    async post({ title, content, photoUrl,userId, lan, lat }) {
        const newPost = {
            CreateDate: Date.now(),
            Title: title,
            Content: content,
            PhotoUrl: photoUrl,
            UserId: userId,
            Longitude: lan,
            Latitude: lat
            
        }
        return await Post.create(newPost);
    }

}
module.exports = postRepository;