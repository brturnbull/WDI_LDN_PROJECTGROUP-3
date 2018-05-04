const router = require('express').Router();
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
//------------------------------------------------------------------------------
router.route('/users')
  .get(users.index);

router.post('/register', auth.register);

router.route('/users/:id')
  .get(users.show);

router.post('/spotify', oauth.spotify);

module.exports = router;
