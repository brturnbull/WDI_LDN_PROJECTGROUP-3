/* global api, describe, it, expect beforeEach */

const jwt = require('jsonwebtoken');

//seed database with a single user for testing

const User = require('../../models/user');
  const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

let user;

describe('POST /login', () => {
  // clearing data before every test
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(_user => {
        user = _user;
        done();
      });
  });

  it('should return a 200 response', done => {
    api
      .post('/api/login')
      .send(userData)
      .expect(200, done);
  });

  it('should return a token', done => {
    api
      .post('/api/login')
      .send(userData)
      .end((err, res) => {
        const payload = jwt.decode(res.body.token);
        expect(res.body.token).to.exist;
        expect(user._id.equals(payload.sub)).to.be.true;
        done();
      });
  });

  it('should return a 401 response if password is bad', done => {
    api
      .post('/api/login')
      .send({ email: 'test@test', password: 'bad'})
      .end((err, res) => {
        expect(res.status).to.eq(401);
        expect(res.body.message).to.eq('Unauthorized');
        done();
      });
  });

  it('should return a 401 response if password is bad', done => {
    api
      .post('/api/login')
      .send({ email: 'bad@test', password: 'test'})
      .end((err, res) => {
        expect(res.status).to.eq(401);
        expect(res.body.message).to.eq('Unauthorized');
        done();
      });
  });

});
