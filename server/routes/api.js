const express = require('express');

const {
  readData,
  readTags,
  readTagged,
  readContent,
} = require('../controllers/posts_controller');

const router = express.Router();

router
  .get('/tagged/:tag', readTagged)
  .get('/post/:id', readContent)
  .get('/', readData)
  .get('/tags', readTags);

module.exports = router;
