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
      username: '',
      email: 'a@a.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Love music and being an actress',
      profile: 'https://nylon-img.imgix.net/featured_images/attachments/000/012/666/original/natalie1.jpg?auto=format&ch=Width%2CDPR&q=75&w=640&ixlib=js-1.1.1&cs=strip&s=24dc6a4d213e385bfa125e30269e87c0'
    },{
      username: 'Jane',
      email: 'b@b.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'I like precious stones, and long barefoot walks on the beach.',
      profile: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p320x320/31946258_10155150472376529_8824864780490637312_n.jpg?_nc_cat=0&oh=161e96b8cfaf1c642ea1c859587a4574&oe=5B8A220B'
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
      bio: 'No wukkas!',
      profile: 'https://media.licdn.com/dms/image/C5603AQFYbDZVtig1CQ/profile-displayphoto-shrink_200_200/0?e=1531353600&v=beta&t=thasSc-0gA6Ygv1fLIVOCv8zqkWaNJWA3ihJKscL8DQ'
    },{
      username: 'Fil',
      email: 'm@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Music lover',
      profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg28JcrxZzlfs92c_gPoeGi0MAW__f554v4nl4iG_46gPjpetH'
    },{
      username: 'Paul',
      email: 'b@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'I love my dog',
      profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-2X2oMDw38AKkZuxMOeNaizyh8FF60aUdOwmrN6Ai3jK74bC'
    },{
      username: 'Steph',
      email: 'f@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Happy little peanut',
      profile: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/20597325_1820250794658321_6232525234198563081_n.jpg?_nc_cat=0&oh=800991954680857896fc08b83d386015&oe=5B9AB4CA'
    },{
      username: 'Rhiannon',
      email: 'p@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: '',
      profile: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/29025704_10156180194583620_1239910668413435904_n.jpg?_nc_cat=0&oh=a0a106a2af8d804c9abd6c79ec7b2ea6&oe=5B897ACC'
    },{
      username: 'Vin',
      email: 'i@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: '',
      profile: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/24312964_10155179665476867_4274868500357912586_n.jpg?_nc_cat=0&oh=e0bd7df1fe54f08bbe8f443ae0c57503&oe=5B91C78C'
    },{
      username: 'Alex',
      email: 'u@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: '',
      profile: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/16649276_10154393666638602_1717738819895087027_n.jpg?_nc_cat=0&oh=8ec00e1fc9949f26389db9ab40e91157&oe=5B9C5AC4'
    },{
      username: 'Kat',
      email: 'y@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'Kitty Kat',
      profile: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p200x200/26165348_10210580527094954_4933088609057658142_n.jpg?_nc_cat=0&oh=3f695580603669353ea86dfb8d8be1f0&oe=5B4F4B9D'
    },{
      username: 'Sean',
      email: 't@w.com',
      password: 'gop',
      passwordConfirmation: 'gop',
      bio: 'I like to listen to lots of different types of music',
      profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hivzZO6-VUX_1VUd9sQjJ22fikQHc6MA07spoDXFoJGdcIn-xA'
    }])
    .then(users => {
      console.log(users);
      console.log(`${users.length} users created`);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
