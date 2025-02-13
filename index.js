require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1); // Stop the app if DB connection fails
    });

// Use routes
app.use('/api', blogRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Blog API! Use /api/posts to access the blog routes.');
});
