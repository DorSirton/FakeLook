
const friendService = require('../services/friend.service');

const controller = {
    getAll: async (req, res) => {
        try {
            const UserId = req.params.id
            console.log(UserId)
            const friends = await friendService.getAll(UserId);
            res.json(friends);
        } catch (error) {
            debugger;
            console.log("error:"+error);
        }

    },
    getAllFriends: async (req, res) => {
        try {
            const friends = await friendService.getAllFriends();
            res.json(friends);
        } catch (error) {
            console.log(error);
        }

    },
    getOneById: async (req, res) => {
        try {
            const { userId, friendId} = req.body;
            console.log(req.params);
            const friend = await friendService.getOneById(userId,friendId);
            res.json(friend);
        } catch (error) {
            console.log(error);
        }
    },
    createFriend: async (req, res) => {
        try{
        const { userId, friendId} = req.body;
        await friendService.createFriend(userId,friendId);
        //res.json(createdUser);
        }
        catch(error)
        {
            console.log(error)
        }
        
    },
    removeFriend: async (req,res)=>{
        try{
        const { userId, friendId} = req.body;
        await friendService.removeFriend(userId,friendId);
        //res.json(createdUser);
        }
        catch(error)
        {
            console.log(error)
        }
    }
}

module.exports = controller