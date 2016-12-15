var express = require('express');
var router = express.Router();

router.get('/testme', function(req, res) {
  res.send('{"message": "Thank you for testing me -- I work!"}');
});

module.exports = router;