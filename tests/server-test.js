const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server.js');

chai.use(chaiHttp);

// describe('API Routes', function() {
describe('Server', () => {
  it('should exist', () => {
    expect(server).to.exist;
  });
});


describe('GET /', () => {
  it('should send back an html file', (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      if(err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.html;
      done();
    });
  });
});

describe('GET /api/v1/users', () => {
  beforeEach(function(done){
      const users = [{name: 'user1', id: 1},
                      {name: 'user2', id: 2}];
      server.locals.users = users;
      done();
    });

    afterEach(function(done){
      server.locals.users = [];
      done();
    });


  it('should respond back with all users', (done) => {
    chai.request(server)
    .get('/api/v1/users')
    .end((err, res) => {
      if(err) {done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(32);
      done();
    });
  });
});

describe('GET /api/v1/users', () => {  //SAD PATH
  it('should not respond back with all users', (done) => {
    chai.request(server)
    .get('/api/v1/userss')
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });
});

describe('GET /api/v1/comments', () => {
  it('should respond back with all comments', (done) => {
    chai.request(server)
    .get('/api/v1/comments')
    .end((err, res) => {
      if(err) {done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(32);
      done();
    });
  });
});

describe('POST /api/v1/users', function() {
    beforeEach(function(done){
        const folders = [{name: 'comment1', id: 1},
                        {name: 'comment2', id: 2}];
        server.locals.folders = folders;
        done();
      });

      afterEach(function(done){
        server.locals.folders = [];
        done();
      });

  it('should create a new user', function(done) {
    let user = {userName:'user fun'}
    chai.request(server)
    .post('/api/v1/users')
    .send(user)
    .end((err, res) => {
    expect(res).to.have.status(201);
    expect(res).to.be.json;
    expect(res.body).to.be.a('array');
    done();
    });
  });
});

describe('POST /api/v1/comments', function() {
    beforeEach(function(done){
        const comments = [{name: 'user1', id: 1},
                        {name: 'user2', id: 2}];
        server.locals.comments = comments;
        done();
      });

      afterEach(function(done){
        server.locals.comments = [];
        done();
      });

  it('should create a new user', function(done) {
    let user = {userName:'user fun'}
    chai.request(server)
    .post('/api/v1/comments')
    .send(user)
    .end((err, res) => {
    expect(res).to.have.status(201);
    expect(res).to.be.application;
    expect(res.body).to.be.a('object');
    done();
    });
  });
});
