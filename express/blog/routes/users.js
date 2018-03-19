const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('users/users', {
    name: '安安',
  });
});

module.exports = router;
