const rp = require('request-promise');
const apiKey = process.env.FACEPLUS_API_KEY;
const apiSecret = process.env.FACEPLUS_API_SECRET;
//------------------------------------------------------------------------------
function faceRecognition(req, res, next) {

  rp({
    // post to the face plus detection API with the necessary arguments in the query string (qs)
    method: 'POST',
    url: 'https://api-us.faceplusplus.com/facepp/v3/detect',
    qs: {
      api_key: apiKey,
      api_secret: apiSecret,
      // req.body.imageUrl take the image from the filestack uploader
      image_url: req.body.imageUrl,
      // specify the attributes you want in the response (in this case, emotion)
      return_attributes: 'emotion'
    },
    // return in JSON
    json: true
  })
    .then(response => {
      // The data does not come back as one single emotion, instead it returns an object containing
      // All of the emotions and the percentage of how much that emotion is displayed
      // See below - just returning the specific object for emotion
      const data = response.faces[0].attributes.emotion;
      // Push the data into an array
      const dataSorted = Object.keys(data);
      // Sort the keys by their values in order of highest to lowest
      dataSorted.sort((a, b) => {
        return data[b] - data[a];
      });
      // Return just the first of the array as this will be the strongest emotion
      res.json(dataSorted[0]);
    })
    .catch(next);
}
//------------------------------------------------------------------------------
module.exports = {
  faceRecognition
};
