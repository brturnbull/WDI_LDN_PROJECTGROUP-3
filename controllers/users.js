const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//------------------------------------------------------------------------------
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {type: String, unique: true },
  password: { type: String },
  spotifyId: {type: Number, unique: true}
});

//moongoose validator
//------------------------------------------------------------------------------
module.exports = mongoose.model('User', userSchema);
