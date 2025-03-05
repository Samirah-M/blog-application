const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostsByCategory, updatePost, deletePost } = require('../controllers/postController');

router.post('/posts', createPost);
router.get('/posts', getAllPosts);
router.get('/posts/category/:category', getPostsByCategory);
router.put('/posts', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;
