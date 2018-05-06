const router = require('express').Router();
const users = require('../controllers/users');
const spotify = require('../controllers/spotify');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
//------------------------------------------------------------------------------
router.route('/users')
  .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users/:id')
  .get(users.show)
  .delete(users.delete)
  .put(users.update);

router.post('/spotify', oauth.spotify);
router.get('/playlists/:playlistId', spotify.playlist);

module.exports = router;
