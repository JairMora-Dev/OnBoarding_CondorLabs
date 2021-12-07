process.env.API_KEY = '!Condor2021';

const chai = require('chai');
const supertest = require('supertest');
const queryString = require('query-string');
const app = require('../index');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFtZXMiLCJsYXN0TmFtZSI6IlJlZHJpZ3VleiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzc4NzExMDl9.-jyu-zDZRtXqkNBUwnWoUB4PpnC7FLO2AEaXRMyYBJw';

const request = supertest(app);

describe('The results of query params in endpoint GET to /doctors ', () => {
  const pagination = queryString.stringify({
    offset: 1,
    limit: 3,
  });

  const listedAtoZ = queryString.stringify({
    sort: 'desc',
  });

  const listedZtoA = queryString.stringify({
    sort: 'asc',
  });

  const area = queryString.stringify({
    specialism: 'psychologist',
  });

  const descOrderExpected = ['Suluaga romero', 'Soto Gil', 'San-Martin'];

  const ascOrderExpected = ['Amaya Ruiz', 'Beltran', 'Canon Sanchez'];

  it('1) Should array length = 3 using offset and limit query params', async () => {
    const response = await request.get(`/doctors?${pagination}`).set('Authorization', `Bearer ${token}`);
    const results = response.body;
    const lengthResponse = results.length > 4;
    chai.expect(lengthResponse).to.be.false;
  });

  it('2) should returns an array', async () => {
    const response = await request.get(`/doctors?${pagination}`).set('Authorization', `Bearer ${token}`);

    chai.expect(Array.isArray(response.body)).to.be.true;
  });

  it(`3) should returns ${descOrderExpected.join()} in the same order when sort by name is specified as desc`, async () => {
    const response = await request.get(`/doctors?${pagination}&${listedAtoZ}`).set('Authorization', `Bearer ${token}`);

    const res = response.body;

    chai.expect(res.length === descOrderExpected.length).to.be.true;

    chai.expect(res[0].lastName).to.be.equal(descOrderExpected[0]);
    chai.expect(res[1].lastName).to.be.equal(descOrderExpected[1]);
    chai.expect(res[2].lastName).to.be.equal(descOrderExpected[2]);
  });

  it(`4) should returns ${ascOrderExpected.join()} in the same order when sort by name is specified as asc`, async () => {
    const response = await request.get(`/doctors?${pagination}&${listedZtoA}`).set('Authorization', `Bearer ${token}`);

    const res = response.body;

    chai.expect(res.length === ascOrderExpected.length).to.be.true;

    chai.expect(res[0].lastName).to.be.equal(ascOrderExpected[0]);
    chai.expect(res[1].lastName).to.be.equal(ascOrderExpected[1]);
    chai.expect(res[2].lastName).to.be.equal(ascOrderExpected[2]);
  });

  it(`5) should returns only doctors with the specialims: psychologist`, async () => {
    const response = await request
      .get(`/doctors?${pagination}&${listedAtoZ}&${area}`)
      .set('Authorization', `Bearer ${token}`);

    const res = response.body;

    chai.expect(res[0].lastName).to.be.equal('Suluaga romero');
    chai.expect(res[1].lastName).to.be.equal('Mohamed');
    chai.expect(res[2].lastName).to.be.equal('Cortes');
  });
});
