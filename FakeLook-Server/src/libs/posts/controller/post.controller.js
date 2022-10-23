const postService = require('../service/post.service');
const { BlobServiceClient } = require('@azure/storage-blob');
var multipart = require('parse-multipart');

const postController = {
    getPostsFiltteredByLocation: async (req, res) => {
        const { usersIdArray, radius, myLng, myLat, toDate, fromDate } = req.query;

        const arr = usersIdArray.split(",");
        const numberArray = [];
        arr.forEach(element => {
            numberArray.push(parseInt(element))
        });

        const radiusP = parseInt(radius)
        const lng = parseFloat(myLng)
        const lat = parseFloat(myLat)
        const toDatefilter = toDate;
        const fromDatefilter = fromDate;

        try {
            const posts = await postService.getPostsFiltteredByLocation(numberArray, radiusP, lng, lat, fromDatefilter, toDatefilter)
            res.json(posts)
        }
        catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        const { title, content, photoUrl, userId, lan, lat } = req.body;
        const AZURE_STORAGE_CONNECTION_STRING =process.env.AZURE_STORAGE_CONNECTION_STRING
        
        var bodyBuffer = Buffer.from(photoUrl);
        var boundary = multipart.getBoundary(req.headers['content-type']);

        var parts = multipart.Parse(bodyBuffer, boundary);
        const blobSerivceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

        const container = "postsimages";
        const containerClient = blobSerivceClient.getContainerClient(container);

        const blobName = parts[0].filename;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        const uploadblobResponse = await blockBlobClient.upload(parts[0].data, parts[0].data.length);
        const name = uploadblobResponse.blobName;

        const createdPost = await postService.create({ title, content, name, userId, lan, lat });
        res.json(createdPost);
    }




}

module.exports = postController