var express = require('express');
var router = express.Router();
var cards= require('../data/cards')

router.get('/cards', function(req, res, next) {
  res.send(cards);
});

router.get('/cards/:id', function(req, res, next) {
  res.send(req.params.id);
});

router.post('/cards/:id', function(req, res, next) {
  // res.send(req.params.id);
});

module.exports = router;
