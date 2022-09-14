const express = require("express");
const app = express();


const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());


app.use(bodyParser.json());




app.listen(Urls.serverPort, () =>
  console.log(
    `Quiz Project server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);