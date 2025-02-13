const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Create a new blog post
router.post('/posts', blogController.createPost);

// Get all blog posts
router.get('/posts', blogController.getAllPosts);

// Get a single blog post by ID
router.get('/posts/:id', blogController.getPostById);

// Update a blog post by ID
router.put('/posts/:id', blogController.updatePost);

// Delete a blog post by ID
router.delete('/posts/:id', blogController.deletePost);

module.exports = router;
