'use strict';

const Posts = require('../models/post_schema');

const readData = (req, res) => {
  Posts.find()
    .then((data) => {
      res.status(200).json(data);
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
      console.log(data);
    });
};

const readTags = (req, res) => {
  Posts.distinct('tags')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const readTagged = (req, res) => {
  let tag = req.params.tag || '';
  console.log('tag is:', tag);
  Posts.find({'tags': tag}, {'message.created': 1, 'message.subject': 1})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const readContent = (req, res) => {
  let id = req.params.id || '';
  console.log('id is:', id);
  Posts.findOne({'_id': id})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  readData,
  readTags,
  readTagged,
  readContent
};
