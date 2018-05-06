const rp = require('request-promise');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

function playlist(req, res, next) {

  rp({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'client_credentials'
    },
    headers: {
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    json: true
  })
    .then(response => {
      return  rp({
        method: 'GET',
        url: `https://api.spotify.com/v1/users/spotify/playlists/${req.params.playlistId}`,
        headers: {
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

module.exports = {
  playlist
};
