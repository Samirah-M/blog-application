require('dotenv').config();
const mysql = require('mysql2');
const url = require('url');

// Get the DATABASE_URL from environment variables
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL is not set in the .env file');
}

// Parse the DATABASE_URL to get individual components
const parsedUrl = new URL(dbUrl);

// Create the MySQL connection using the parsed URL components
const db = mysql.createConnection({
  host: parsedUrl.hostname, // Host for the MySQL server
  user: parsedUrl.username, // Database username
  password: parsedUrl.password, // Database password
  database: parsedUrl.pathname.replace('/', ''), // Database name (remove the leading slash)
  port: parsedUrl.port || 3306, // Port for MySQL (default to 3306 if not specified)
});

// Attempt to connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Export the database connection to be used elsewhere
module.exports = db;
