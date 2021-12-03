const user = require('../models/user.model');
const userController = require('../controllers/user.controller');

const usersMocks = [
  [
    {
      state: false,
      isAdmin: false,
      _id: '619e7b2e1e7aea0f59e3715a',
      name: 'Jeremy',
      lastName: 'Mathew Johnson',
      password: '$2b$10$qrfMMtCMxY.UQamZoPOwSuVouFI2.cKUpcgwAOM5rSsh1KJosUyzq',
      age: 30,
      __v: 0,
    },
    {
      state: true,
      isAdmin: true,
      _id: '619eb90b885ffe190aaedf71',
      name: 'CondorHealt3456789',
      lastName: '$$del0al10$$',
      password: '$2b$10$6Q1685GI3tbmCrV2V093sugw/C7vPfWpC3./8nrJXDvzNvJ0bidgm',
      age: 26,
      __v: 0,
    },
    {
      state: true,
      isAdmin: false,
      _id: '619fea0caadf231b1e5fe5fd',
      name: 'James',
      lastName: 'Redriguez',
      password: '$2b$10$J6GyxdAPpzWrEJgxKGDES.z3mvTyOEmhmOWWAPtN5SQxyvrOj1kOm',
      age: 30,
      __v: 0,
    },
    {
      state: true,
      isAdmin: false,
      _id: '61a0df1b5c0dd004d634d6e2',
      name: 'Rodolfo',
      lastName: 'Pedraza Alvarez',
      password: '$2b$10$76UYXE4g5kMu61XvvLtrGOoK1dNPSmlbViPLdtIemIUZsqX2Sob16',
      age: 40,
      __v: 0,
    },
    {
      state: true,
      isAdmin: false,
      _id: '61a0df61b29c5504eac2a482',
      name: 'Lucia',
      lastName: 'Romero Conzo',
      password: '$2b$10$73igiu1lU5GD4PJ72Up9WOVepVdzruR4cptU4ruL796RLgFqDtiKW',
      age: 58,
      __v: 0,
    },
    {
      state: true,
      isAdmin: false,
      _id: '61a7754643ed28043c5591ea',
      name: 'Hernesto Fabio',
      lastName: 'Zabaleta Aguirre',
      password: '$2b$10$tt26.4L/jN1YVhZ9jvKZcesJEzG/ai9KWuiSxT4iuXSpql9nUnqxy',
      age: 58,
      __v: 0,
    },
    {
      state: true,
      isAdmin: false,
      _id: '61a7d63768366d28041f3776',
      name: 'Macias',
      lastName: 'Presentando OnBorading',
      password: '$2b$10$gDPz4Hcn5iiaSNRL6EWPWehIkCC2kn4nJ7x2WMpyzush4WVE5fhUy',
      age: 23,
      __v: 0,
    },
  ],
];

jest.mock('../models/user.model', () => ({
  find: jest.fn().mockReturnThis(),
}));

describe('When this endpoint get all users', () => {
  afterEach(() => {
    user.find.mockRestore();
  });

  it('Should get all users return status 200', async () => {
    user.find.mockResolvedValue(usersMocks);
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };

    await userController.find({}, res);
    expect(user.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(usersMocks);
  });
});

describe('When the server is broke', () => {
  it('Should get all user return status 500', async () => {
    user.find.mockImplementation(() => {
      throw new Error('My Server Error');
    });
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };

    await userController.find({}, res);
    expect(user.find).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ err: 'server error' });
  });
});
