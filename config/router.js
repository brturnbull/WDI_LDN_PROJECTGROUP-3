const router = require('express').Router();
// const users = require('../controllers/users');
const auth = require('../controllers/auth');
//------------------------------------------------------------------------------
router.route('/users');

router.post('/register', auth.register);

module.exports= router;
