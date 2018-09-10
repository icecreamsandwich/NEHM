var express = require('express');
var router = express.Router();
var Content = require('../models/content');



/* GET home page. */
router.get('/', function(req, res, next) {
    Content.find(function(err, content) {
      res.render('index', { title: 'Node Project', contents: content });
  });
});

/* GET Lorem page. */
router.get('/lorem', function(req, res, next) {
    Content.find(function(err, content) {
      res.render('lorem', { title: 'Lorem page', contents: content });
  });
});

/* GET Ipsum page. */
router.get('/ipsum', function(req, res, next) {
    Content.find(function(err, content) {
      res.render('ipsum', { title: 'Lorem page', contents: content });
  });
});
module.exports = router;