const _ = require('lodash');
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');
const Tag = require("../models/Tag")(dbSequelize, Sequelize.DataTypes);

const tagRepository = {
    async getTags(){
       let tags = [];
       tags = await Tag.findAll()
       return tags;
    },

    async post(userId,content) {
        const newTag = {
            UserId:userId,
            CreateDate: Date.now(),
            TagName:content
            
        }
        return await Tag.create(newTag);
    }

}
module.exports = tagRepository;