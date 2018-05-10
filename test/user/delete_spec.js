/* global api, describe, it, expect beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');
//------------------------------------------------------------------------------
const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let token;
let clientId;
let clientSecret;
//------------------------------------------------------------------------------
describe('DELETE /user/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id}, secret, { expiresIn: '6h'});
      })
      .then(() => done());
  });
  // //------------------------------------------------------------------------------
  it('should return a 204 response with a token', done => {
    api
      .delete('/api/users/:id')
      .set({
        'Authorisation': `Bearer ${token}`,
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      })
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });
//------------------------------------------------------------------------------

});
