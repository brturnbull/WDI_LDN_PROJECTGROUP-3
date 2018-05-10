const rp = require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
//------------------------------------------------------------------------------
function spotify(req,res,next) {
  rp({
    // make a post request to the spotify accounts url to get an access token
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'authorization_code',
      // req body contains a code which needs to be used to
      code: req.body.code,
      redirect_uri: req.body.redirectUri
    }, //req.body.redirectUri

    // redirect uri needs to be the homepage to which the page goes back when satellizer is complete
    //must not have a '/' at the end - causes issues

    headers: {
      // encoding the client id and secret again as requested by spotify docs
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    json: true
  })
    .then(response => {
      return rp({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        // qs for query string means no need for concatenation and makes it easier to read
        // best to use in case where there is multiple values to be added
        qs: {
          // using the access token we received in the response
          access_token: response.access_token
        },
        json: true
      });
    })
    // once you have the accessToken, use it to get the user's profile from spotify
    .then(response => {
      // find user by either email or spotify id
      return User.findOne({ $or: [{email: response.email}, {spotifyId: response.id}] })
        .then(user => {
          if(!user) {
            // if they are not a user then create a new account with their username and email
            user = new User({
              username: response.display_name || response.id,
              email: response.email,
              profile: response.images[0] ? response.images[0].url : 'https://i.imgur.com/HAV4qUv.png'
            });
          }
          //adding spotify id regardless -
          user.spotifyId = response.id;

          return user.save();
        });
    })
    .then(user => {
      // create a token using the newly created user's id, send it back to the client
      // taken and used from auth here-----------------------
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        // message to test in insomnia
        message: `Welcome back ${user.username}!`,
        token,
        user
      });
      // to here! ---------------------------
    })
    .then()
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = {spotify};
