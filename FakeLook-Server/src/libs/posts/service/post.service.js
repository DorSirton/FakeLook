const postRepository = require('../../../repositories/post.repository');
const postService = {
    async getAll() {
        // return userRepository.getAll();
    },
    async getById(id) {
        // return userRepository.getById(id);
    },

    async create({ title, content, photoUrl,userId, lan, lat }) {
        return postRepository.post({ title, content, photoUrl,userId, lan, lat });
    },

    async getPostsFiltteredByLocation(usersIdArray,radiusParam,myLng,myLat){
        const postsArray = await postRepository.getPostsById(usersIdArray);
        const filtteredPostArray = postsArray.filter(post => post.Latitude < myLat + radiusParam &&
        post.Longitude < myLng + radiusParam);
        return postsArray;     
    }
}
module.exports = postService