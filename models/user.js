const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');
//------------------------------------------------------------------------------
const userSchema = new mongoose.Schema({
  username: { type: String},
  email: {type: String, unique: true },
  password: { type: String },
  spotifyId: { type: String },
  bio: { type: String},
  profile: { type: String}
});
//------------------------------------------------------------------------------

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

userSchema.plugin(require('mongoose-unique-validator'));

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

//Before (pre) any function 'saves' something, run this function to encrypt the password before it is stored:
userSchema.pre('validate', function checkPassword(next){
  if(!this.password && !this.spotifyId) {
    this.invalidate('password', 'password is required');
  }
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});
//------------------------------------------------------------------------------
module.exports = mongoose.model('User', userSchema);
