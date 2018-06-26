'use strict';

require('babel-register'); 

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

// import Place from '../../src/models/places.js';
import {server} from '../../src/app.js';

// const API_URL = '/api/v1/places';

const mockRequest = require('supertest')(server);

jest.setTimeout(30000);

afterAll(() => {
  mongoose.connection.close();
});

describe('API', () => {

  beforeAll( (done) => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect('mongodb://localhost:27017/lab13').then(() => {
        done();
      });
    });
  });

  afterEach( (done) => {
    mockgoose.helper.reset().then(done);
  });

  it('get should return 200 for home', () => {

    return mockRequest.get('/')
      .then(res => {
        expect(res.statusCode).toBe(200);
      });
  });

});