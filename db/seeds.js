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
      username: 'Neo',
      email: 'a@a.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Putting matrix references in my code in my spare time',
      profile: 'https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },{
      username: 'Morpheus',
      email: 'b@b.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'wakkas',
      profile: 'https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },{
      username: 'Elliot',
      email: 'e@e.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Pre lunch ?',
      profile: 'https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },{
      username: 'Bridget',
      email: 'z@z.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      spotifyId: '911',
      bio: 'No wakkas !',
      profile: 'https://i0.wp.com/franimals.org/wp-content/uploads/2015/10/sloth-1.jpg'
    }])
    .then(users => {
      console.log(users);
      console.log(`${users.length} neos have joined the matrix!`);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
