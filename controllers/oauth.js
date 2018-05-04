const rp = require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

function spotify(req,res,next) {
  console.log(req.body);
  rp({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: 'http://localhost:8000'
    },
    headers: {
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    json: true
  })
    .then(response => {
      console.log(response)
      return rp({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        qs: {
          access_token: response.access_token
        },
        headers: {
          Authorization: 'Bearer ' + response.code
        },
        json: true
      });
    })
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


module.exports = {
  spotify
};
