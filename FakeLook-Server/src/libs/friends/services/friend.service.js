const friendRepository = require('../../../repositories/friend.repository');

const service = {
    async getAll(id) {
        return friendRepository.getAllById(id);
    },
    async getAllFriends() {
        return friendRepository.getAllFriends();
    },
    async getOneById(userId,friendId) {
        return friendRepository.findOne(userId,friendId);
    },
    async createFriend(userId,friendId){
        return friendRepository.post(userId,friendId);
    },
    async removeFriend(userId,friendId){
        return friendRepository.delete(userId,friendId);
    }

}
module.exports = service