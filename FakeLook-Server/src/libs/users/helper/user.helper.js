const crypto = require('crypto');

const getSlat = () => {
    return crypto.randomBytes(16).toString('hex');
}

const getPassword = (slat, password) => {
    // Hashing user's salt and password with 1000 iterations, 
    return crypto.pbkdf2Sync(password, slat, 1000, 64, `sha512`).toString(`hex`);
}

const validPassword = (user, password) => {
    const hash = crypto.pbkdf2Sync(password, user.Slat, 1000, 64, `sha512`).toString(`hex`);
    return user.Password === hash;
}

module.exports = {
    getSlat,
    getPassword,
    validPassword
}