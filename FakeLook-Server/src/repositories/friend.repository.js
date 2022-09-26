const _ = require('lodash');
const Sequelize = require('sequelize');
const dbSequelize = require('../core/db-sequelize');

const UserFriends = require("../models/Users_Friends")(dbSequelize, Sequelize.DataTypes);


module.exports = {
    async getAllById(id) {
        const friendsList = await UserFriends.findAll({
            where: {
                UserId: id
            }
        });

        return friendsList
    }, 
    async getAllFriends() {
       return UserFriends.findAll();
       
    }, 
    async findOne(userId,friendId) {
        return UserFriends.findOne({
            where: {
                UserId: userId,
                UserFriendId: friendId
            }
        });
    },
    async post(userId,friendId){
        const currentDate=Date.now();
        const friend={
            UserId: userId,
            UserFriendId: friendId,
            CreateDate:currentDate
        }
        UserFriends.create(friend)
    },
    async delete(userId,friendId) {

        const friend=UserFriends.findOne({
            where: {
                UserId: userId,
                UserFriendId: friendId
            }
        })
        UserFriends.remove(friend)
    }
    
}

