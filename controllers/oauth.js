const rp = require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
//------------------------------------------------------------------------------
function spotify(req,res,next) {
  rp({
    //
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: req.body.redirectUri
    },
    headers: {
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    json: true
  })
    .then(response => {
      return rp({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        // qs for query string means no need for concatenation and makes it easier to read
        qs: {
          access_token: response.access_token
        },
        json: true
      });
    })
    .then(response => {
      //find user by either email or spotify id
      return User.findOne({ $or: [{email: response.email}, {spotifyId: response.id}] })
        .then(user => {
          if(!user) {
            // if they are not a user then create a new account with their username and email
            user = new User({
              username: response.display_name || response.id,
              email: response.email
            });
          }
          //adding spotify id regardless -
          // outside the function so the user
          user.spotifyId = response.id;

          return user.save();
        });
    })
    .then(user => {
      // stolen from auth here-----------------------
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.username}!`,
        token,
        user
      });
      // to here! ---------------------------
    })
    .then()
    .catch(next);
  // req.body should contain a code { code: 'kfjhfksdahfdskjhfkdshfksdh' }
  // POST https://accounts.spotify.com/api/token
  // form: {
  //  grant_type: 'authorization_code'
  //  code: req.body.code
  //  redirect_uri: req.body.redirectUri
  // }
  // headers: {
  //  Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
  // }

  // once you have the accessToken, use it to get the user's profile from spotify
  // GET https://api.spotify.com/v1/me
  // headers: {
  //  Authorization: 'Bearer ' + accessToken
  // }
  // once you have the profile store it in the database
  // create a token using the newly created user's id, send it back to the client
}
//------------------------------------------------------------------------------
module.exports = {spotify};
