const router = require('express').Router();
const users = require('../controllers/users');
const spotify = require('../controllers/spotify');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const faceplus = require('../controllers/faceplus');
const secureRoute = require('../lib/secureRoute');
//------------------------------------------------------------------------------
router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .delete(secureRoute,users.delete)
  .put(users.update);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.get('/playlists/:playlistId', spotify.playlist);

router.route('/spotify')
  .post(oauth.spotify)
  .get(secureRoute, spotify.playlist);

router.post('/faceplus', faceplus.faceRecognition);

//------------------------------------------------------------------------------

module.exports = router;
