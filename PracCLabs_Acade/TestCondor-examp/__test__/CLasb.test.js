const user = require('../src/services');
const sinon = require('sinon');
const app = require('../src/Index');
const request = require('supertest');

let stubUser;
const fetchapp = request(app);

const input = {
  email: 'desdeTest@hotmail.com',
  name: 'From hello',
  profession: 'hello',
};

let ConsoleErrorStub;

describe('Tests for create users', () => {
  beforeEach(() => {
    ConsoleErrorStub = sinon.stub(console, 'log').returns();
  });
  afterEach(() => {
    ConsoleErrorStub.restore();
  });

  describe('Test for console error', () => {
    beforeEach(() => {
      stubUser = sinon.stub(user, 'save').returns({ _id: 'idmock', ...input });
    });

    afterEach(() => {
      stubUser.restore();
    });

    test('it should be mockuser creation in rute users', async () => {
      const res = await fetchapp.post('/users').send(input);

      console.log(res);
    });
  });
});
