const router = require('express').Router();
// const users = require('../controllers/users');
const oauth = require('../controllers/oauth');
//------------------------------------------------------------------------------
router.route('/users');

router.post('/spotify', oauth.spotify);

module.exports = router;
