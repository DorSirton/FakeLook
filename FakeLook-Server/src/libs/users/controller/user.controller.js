const userService = require('../services/user.service');
const { BlobServiceClient } = require('@azure/storage-blob');
//const multipart = require("parser-multipart");
var multipart = require("parse-multipart");
const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=profilepicturesstorage;AccountKey=ZRqUXIq6MtM7vqHQAz0s8FumTEeMPxILz5A4mtc15hjDmlCO4qMz6DOzI2zwGBbgPeMKL6lIme+W+ASt+VCW8w==;EndpointSuffix=core.windows.net";

const controller = {
    getAll: async (req, res) => {
        try {
            const users = await userService.getAll();
            res.json(users);
        } catch (error) {
            console.log(error);
        }

    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(req.params);
            const user = await userService.getById(id);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        const { userName, email, password, birthDate } = req.body;
        const createdUser = await userService.create({ userName, email, password, birthDate: new Date(birthDate) });
        res.json(createdUser);
    },

    uploadFile: async (req, res) => {
        var bodyBuffer = Buffer.from(JSON.stringify(req.body));

        var boundary = multipart.getBoundary(req.headers['content-type']);
        var parts = multipart.Parse(bodyBuffer, boundary);
        
        console.log(parts);

        const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

        const container = "profilepictures";
        const containerClient = blobServiceClient.getContainerClient(container);

        //const blobName = parts[0].filename;
        const blobName = "first";

        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        const uploadBlobResponse = await blockBlobClient.upload(parts[0].data, parts[0].data.length);

        context.res = { body: { name: parts[0].filename, type: parts[0].type, data: parts[0].data.length } };
        context.done();

        //context.res
        // {
        //     body: AZURE STORAGE_CONNECTION STRING
        // }

    }
}

module.exports = controller