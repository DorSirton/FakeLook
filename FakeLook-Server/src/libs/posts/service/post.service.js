const postRepository = require('../../../repositories/post.repository');
const haversine = require("haversine-distance");


const postService = {
    async getAll() {
        // return userRepository.getAll();
    },
    async getById(id) {
        // return userRepository.getById(id);
    },

    async create({ title, content, photoUrl, userId, lan, lat }) {
        return postRepository.post({ title, content, photoUrl, userId, lan, lat });
    },

    async getPostsFiltteredByLocation(usersIdArray, radiusParam, myLng, myLat, fromDate, toDate) {
        const fromdate=new Date(fromDate);
        const todate=new Date(toDate);
        const myPoint = { latitude: myLat, longitude: myLng }
        let postPoint;
        let haversine_km;
        let filteredPosts = [];
        const postsArray = await postRepository.getPostsById(usersIdArray);

        postsArray.forEach(post => {
            postPoint = { latitude: post.Latitude, longitude: post.Longitude }
            haversine_km = haversine(myPoint, postPoint) / 1000
            if (radiusParam > haversine_km)
            if(post.CreateDate>=fromdate&&post.CreateDate<=todate)
                filteredPosts.push(post)
        }
        )
    

        return filteredPosts.sort((post1, post2) => post2.CreateDate - post1.CreateDate);
    },

}
module.exports = postService