const config = require('config');
const DB_NAME = config.get('db.database');
const SERVER = config.get('db.server');
const USERNAME = config.get('db.user');
const PASSWORD = config.get('db.password');

const Sequelize = require("sequelize");
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    // Z here means current timezone, _not_ UTC
    // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelize = new Sequelize(
    DB_NAME,
    USERNAME,
    PASSWORD,
    {
        host: SERVER,
        dialect: 'mssql'
    }
);

// sequelize-auto-models -h "fakelook-db.database.windows.net" -d "FakeLook-Db" -u "User" -x "DorAyalItai123" -p "1433"  -dialect "MSSQL"  -o "FakeLook-Server\src\models"

module.exports = sequelize;


