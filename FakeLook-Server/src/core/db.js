const sql = require('mssql');
const config = require('config');
const connectionString = config.get('db.connectionstring');
const server = config.get('db.server');
const password = config.get('db.password');
const user = config.get('db.user');
const database = config.get('db.database');
let pool = undefined;

const init = async () => {
    const appPool = new sql.ConnectionPool({
        server,
        password,
        user,
        database
    })

    pool = await appPool.connect();
    console.log('db connected..');
    // appPool.connect().then(async function (pool) {
    // _pool = pool;
    //     console.log('db connected..');
    // });
}

const getPool = () => {
    return pool;
}


module.exports = {
    init,
    getPool
}
