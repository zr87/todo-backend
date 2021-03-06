var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
});

module.exports = router;
