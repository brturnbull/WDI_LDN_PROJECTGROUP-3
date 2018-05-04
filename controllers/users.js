const User = require('../models/user');
//---------INDEX----------------------------------------------------------------
function usersIndex(rew, res, next){
  User
    .find()
    .then(users => res.json(users))
    .catch(next);
}
//----------SHOW----------------------------------------------------------------
function usersShow(req, res, next){
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(400);
      res.json(user);
    })
    .catch(next);
}

//------------------------------------------------------------------------------
module.exports = {
  index: usersIndex,
  show: usersShow
};
