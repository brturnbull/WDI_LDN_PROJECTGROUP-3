const rp = require('request-promise');
const apiKey = process.env.FACEPLUS_API_KEY;
const apiSecret = process.env.FACEPLUS_API_SECRET;
const imageUrl = 'https://cdn.filepicker.io/api/file/scYIC43TX2Jy9SyRYcKJ';

function faceRecognition(req, res, next) {

  rp({
    method: 'POST',
    url: `https://api-us.faceplusplus.com/facepp/v3/detect?api_key=${apiKey}&api_secret=${apiSecret}&image_url=${imageUrl}&return_attributes=emotion`,
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
