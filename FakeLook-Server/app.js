const config = require('config');
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./src/core/db');

const PORT = config.get("port");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.use('/auth', require('./src/libs/auth'));
app.use('/groups', require('./src/libs/groups'));
app.use('/posts', require('./src/libs/posts'));
app.use('/users', require('./src/libs/users'));


db.init();



app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT} ...`);
});