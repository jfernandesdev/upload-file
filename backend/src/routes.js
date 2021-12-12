const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const multerS3 = require('multer-s3');

const Post = require('./models/Post');

// route to upload new files
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file;

  const post = await Post.create({
    name, 
    size,
    key,
    url,
  });
  
  return res.json(post);
});

// route to list uploaded files
routes.get('/posts', async(req, res) => {
  const posts = await Post.find();

  return res.json(posts);
});

module.exports = routes;