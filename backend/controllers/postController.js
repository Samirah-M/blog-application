// server/controllers/postController.js
const db = require('../config/db');

exports.createPost = (req, res) => {
  const { title, content, category, userId } = req.body;

  const query = 'INSERT INTO posts (title, content, category, user_id) VALUES (?, ?, ?, ?)';
  db.query(query, [title, content, category, userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Post created successfully' });
  });
};

exports.getAllPosts = (req, res) => {
  const query = 'SELECT * FROM posts';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getPostsByCategory = (req, res) => {
  const { category } = req.params;

  const query = 'SELECT * FROM posts WHERE category = ?';
  db.query(query, [category], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.updatePost = (req, res) => {
  const { id, title, content, category } = req.body;

  const query = 'UPDATE posts SET title = ?, content = ?, category = ? WHERE id = ?';
  db.query(query, [title, content, category, id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Post updated successfully' });
  });
};

exports.deletePost = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM posts WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Post deleted successfully' });
  });
};
