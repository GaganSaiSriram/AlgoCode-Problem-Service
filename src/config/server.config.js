const dotenv = require('dotenv');

 dotenv.config();

module.exports = {
    PORT:process.env.PORT || 3000,
    LOCAL_DB_URL:process.env.LOCAL_DB_URL,
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    LOCAL_LOG_DB_URL:process.env.LOCAL_LOG_DB_URL,
    NODE_ENV: process.env.NODE_ENV || "development"
}