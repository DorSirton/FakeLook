const postService = require('../service/post.service');

const postController = {
    getPostsFiltteredByLocation: async (req, res) => {
        const { usersIdArray,radius,myLng,myLat } = req.query;
        const arr = usersIdArray.split(",");
        const numberArray = [];
        arr.forEach(element => {
            numberArray.push(parseInt(element))
        });
        const radiusP = parseInt(radius)
        const lng = parseFloat(myLng)
        const lat = parseFloat(myLat)
        try {
            const posts = await postService.getPostsFiltteredByLocation(numberArray, radiusP, lng, lat)
            res.json(posts)
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = postController