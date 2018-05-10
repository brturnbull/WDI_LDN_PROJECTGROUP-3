/* global api, describe, it, expect beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let token;
let clientId;
let clientSecret;

describe('POST /spotify', () => {
  beforeEach(done => {
    User
      .remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id}, secret, { expiresIn: '6h'});
      })
      .then(() => done());
  });

  it('should return a 401 response without a token', (req, done) => {
    api
      .post('/api/spotify')
      .send(req.body)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 201 response with a token', (req, done) => {
    api
      .post('/api/spotify')
      .set({
        'Authorisation': `Bearer ${token}`,
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      })
      .send(req.body)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', (req, done) => {
    api
      .post('/api/spotify')
      .set({
        'Authorisation': `Bearer ${token}`,
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      })
      .send(req.body)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

});
