const db = require('../core/db');

const repository = {
    async getAll() {
        const pool = db.getPool();
        console.log('repository getAll');
        const result = await pool.query(`select * from [dbo].[User]`);
        console.log('asdad');
        return result.recordset
    }
}

module.exports = repository;