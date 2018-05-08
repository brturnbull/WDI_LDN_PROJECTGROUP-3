const rp = require('request-promise');
const apiKey = process.env.FACEPLUS_API_KEY;
const apiSecret = process.env.FACEPLUS_API_SECRET;

function faceRecognition(req, res, next) {

  rp({
    method: 'POST',
    url: 'https://api-us.faceplusplus.com/facepp/v3/detect',
    qs: {
      api_key: apiKey,
      api_secret: apiSecret,
      image_url: req.body.imageUrl,
      return_attributes: 'emotion'
    },
    json: true
  })
    .then(response => {
      const data = response.faces[0].attributes.emotion;
      const dataSorted = Object.keys(data);
      dataSorted.sort((a, b) => {
        return data[b] - data[a];
      });
      res.json(dataSorted[0]);
    })
    .catch(next);
}

module.exports = {
  faceRecognition
};
