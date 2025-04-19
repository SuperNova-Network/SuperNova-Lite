require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const basicAuth = require('express-basic-auth');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Add basic authentication middleware
app.use(
  basicAuth({
    users: { [process.env.AUTH_USER]: process.env.AUTH_PASS }, // Use environment variables
    challenge: true,
  })
);

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

const PORT = process.env.PORT || 3000; // Use environment variable for the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});