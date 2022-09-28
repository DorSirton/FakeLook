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
    }

}
module.exports = postRepository;