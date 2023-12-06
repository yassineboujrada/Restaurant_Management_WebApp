const { join } = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: join(__dirname, '../.env') });

exports.PORT = process.env.PORT || '5000'
exports.DB = process.env.MONGO_URL
exports.logFilePath = join(__dirname, '../logs');
exports.CURRENT_ENV = process.env.NODE_ENV || 'development';
exports.API_VERSION = process.env.API_VERSION || 'v1';