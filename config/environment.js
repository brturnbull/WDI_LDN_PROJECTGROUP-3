const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const secret = process.env.SECRET ||'Eskimosareaninterrestingbunchwefw02f1=';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/moodify-${env}`;
//------------------------------------------------------------------------------
module.exports = { port, secret, dbURI };
