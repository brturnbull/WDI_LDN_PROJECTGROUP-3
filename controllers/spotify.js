const rp = require('request-promise');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
//------------------------------------------------------------------------------
function playlist(req, res, next) {

  rp({
    // make a post request to the spotify accounts url to get an access token
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      // setting the grant type to allow access as per spotify documentation 
      grant_type: 'client_credentials'
    },
    // Providing the client id and secret (stored locally in the ZSHRC file)
    // spotify docs outlines the id and secret need to be encoded using base 64
    headers: {
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    // requesting the response is returned in JSON format
    json: true
  })
    .then(response => {
      return  rp({
        // make a get request to the spotify playlist api
        method: 'GET',
        url: `https://api.spotify.com/v1/users/spotify/playlists/${req.params.playlistId}`,
        headers: {
          // providing the access token that we received from spotify in the post request
          Authorization: `Bearer ${response.access_token}`
        },
        json: true
      });
    })
    .then(response => {
      res.json(response);
    })
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = {
  playlist
};
