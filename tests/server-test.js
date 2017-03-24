const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server.js');
const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Server', () => {
  it('should exist', () => {
    expect(server).to.exist;
  });
});

beforeEach(function(done){
  database('users').truncate();
  database('favorites').truncate();
  database('comments').truncate();
  done();
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

 //SAD PATH
describe('GET /', () => {
  it('should respond back with a 404 error', (done) => {
    chai.request(server)
    .get('/ /')
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });
});

describe('GET /api/v1/users', () => {
  it('should respond back with all users', (done) => {
    chai.request(server)
    .get('/api/v1/users')
    .end((err, res) => {
      if(err) {done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(9);
      done();
    });
  });
});

 //SAD PATH
describe('GET /api/v1/users', () => {
  it('should respond back with a 404 error', (done) => {
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
      expect(res.body).to.have.length(5);
      done();
    });
  });
});

//SAD PATH
describe('GET /api/v1/comments', () => {
  it('should respond back with a 404 error', (done) => {
    chai.request(server)
    .get('/api/v1/commentss')
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });
});

describe('GET /api/v1/favorites', () => {
  it('should respond back with all favorites', (done) => {
    chai.request(server)
    .get('/api/v1/favorites')
    .end((err, res) => {
      if(err) {done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(9);
      done();
    });
  });
});

//SAD PATH
describe('GET /api/v1/favorites', () => {
  it('should respond back with a 404 error', (done) => {
    chai.request(server)
    .get('/api/v1/favoritess')
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });
});

describe('GET /api/v1/accessTokens', () => {
  it('should respond back with all accessTokens', (done) => {
    chai.request(server)
    .get('/api/v1/accessTokens')
    .end((err, res) => {
      if(err) {done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(9);
      done();
    });
  });
});

 //SAD PATH
describe('GET /api/v1/accessTokens', () => {
  it('should respond back with a 404 error', (done) => {
    chai.request(server)
    .get('/api/v1/accessTokenss')
    .end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });
});

describe('POST /api/v1/users', function() {
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

 //SAD PATH
 describe('POST /api/v1/users', function() {
     it('should respond with a 404', function(done) {
       let user = {userName:'user fun'}
       chai.request(server)
       .post('/api/v1/userss')
       .send(user)
       .end((err, res) => {
       expect(res).to.have.status(404);
       expect(res.body).to.be.a('object');
       done();
     });
   });
 });


  it('should create a new comment', function(done) {
    let comment = {comment:'comment fun'}
    chai.request(server)
    .post('/api/v1/comments')
    .send(comment)
    .end((err, res) => {
    expect(res).to.have.status(201);
    expect(res).to.be.application;
    expect(res.body).to.be.a('array');
    done();
    });
  });
});

//SAD PATH
 describe('POST /api/v1/comments', function() {
     it('should respond with a 404', function(done) {
       let user = {userName:'user fun'}
       chai.request(server)
       .post('/api/v1/commentss')
       .send(user)
       .end((err, res) => {
       expect(res).to.have.status(404);
       expect(res.body).to.be.a('object');
       done();
     });
   });
 });

 describe('POST /api/v1/favorites', function() {
     it('should respond with a 422', function(done) {
       let user = {fave:'user fave'}
       chai.request(server)
       .post('/api/v1/favorites')
       .send(user)
       .end((err, res) => {
       expect(res).to.have.status(422);
       expect(res).to.be.json;
       expect(res.body).to.be.a('object');
       done();
     });
   });
 });
