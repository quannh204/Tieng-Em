// db.js
require('dotenv').config(); // Đọc các biến môi trường từ .env
const { Pool } = require('pg');
 
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false // CHỈ DÙNG CHO DEV/TEST, KHÔNG DÙNG CHO PRODUCTION
  }
});
 
// Test connection (optional)
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database at:', res.rows[0].now);
  }
});
module.exports = pool;