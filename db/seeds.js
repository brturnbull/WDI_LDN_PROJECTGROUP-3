//------------Promise setup and database link and drop--------------------------
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI} = require('../config/environment');
mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  //------------Require the models------------------------------------------------
  const User = require('../models/user');

  User
    .create([{
      username: 'Natalie',
      email: 'a@a.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Love music and being an actress',
      profile: 'https://nylon-img.imgix.net/featured_images/attachments/000/012/666/original/natalie1.jpg?auto=format&ch=Width%2CDPR&q=75&w=640&ixlib=js-1.1.1&cs=strip&s=24dc6a4d213e385bfa125e30269e87c0'
    },{
      username: 'Morpheus',
      email: 'b@b.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Will you take the red or blue pill?',
      profile: 'http://i0.kym-cdn.com/photos/images/original/000/354/434/711.jpg'
    },{
      username: 'Elliot',
      email: 'e@e.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Pre lunch ?',
      profile: 'http://i.dailymail.co.uk/i/pix/2017/07/07/20/04799DCD000003E8-0-Rooney_could_be_heading_back_with_a_season_long_loan_understood_-m-37_1499457389035.jpg'
    },{
      username: 'Bridget',
      email: 'z@z.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'No wakkas !',
      profile: 'https://i0.wp.com/franimals.org/wp-content/uploads/2015/10/sloth-1.jpg'
    },{
      username: 'Fil',
      email: 'w@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Testing column length aswell as bio',
      profile: 'https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436'
    }])
    .then(users => {
      console.log(users);
      console.log(`${users.length} neos have joined the matrix!`);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
