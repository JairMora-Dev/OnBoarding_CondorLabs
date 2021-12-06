const professional = require('../models/professional.model');
const profController = require('../controllers/professional.controllers');

const proMocksSlice = [
  {
    state: true,
    availability: true,
    _id: '61a4f024df4d6a0a76295bf1',
    name: 'Carlos Miguel',
    lastName: 'Salcedo',
    specialism: 'ophthalmologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a4f04adf4d6a0a76295bf2',
    name: 'Mauricio Raul',
    lastName: 'Amaya Ruiz',
    specialism: 'psychologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a4f6aa01781e0ec1bb05ae',
    name: 'Jose Francisco',
    lastName: 'Soto Gil',
    specialism: 'psychiatrist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a4fb1793f88010eec7d2ad',
    name: 'Jorge Manuel',
    lastName: 'Suluaga romero',
    specialism: 'psychologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a516b5de663f1b5284d33c',
    name: 'Marcos Rodrigo',
    lastName: 'Perez Poveda',
    specialism: 'endocrinologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a516d9de663f1b5284d33d',
    name: 'Samir Julian',
    lastName: 'Rodriguez Aveyaneda',
    specialism: 'endocrinologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a516efde663f1b5284d33e',
    name: 'Diego Andres',
    lastName: 'Hurtado Rojas',
    specialism: 'endocrinologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a51709de663f1b5284d33f',
    name: 'Andres David',
    lastName: 'Canon Sanchez',
    specialism: 'endocrinologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a51727de663f1b5284d340',
    name: 'Cristian Steven',
    lastName: 'Ramirez Guzman',
    specialism: 'endocrinologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5175cde663f1b5284d341',
    name: 'Diomedez Eugenio',
    lastName: 'Ramirez Diaz',
    specialism: 'psychiatrist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5177cde663f1b5284d342',
    name: 'Leonel Pira',
    lastName: 'Escalloni Cruz',
    specialism: 'psychiatrist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a517a3de663f1b5284d343',
    name: 'Albert',
    lastName: 'Ochoa Russi',
    specialism: 'psychiatrist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a51802de663f1b5284d344',
    name: 'Alvaro Federico',
    lastName: 'Morata Gua',
    specialism: 'ophthalmologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5185cde663f1b5284d345',
    name: 'Simon',
    lastName: 'Rovira',
    specialism: 'ophthalmologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5187bde663f1b5284d346',
    name: 'Francisco Jesus',
    lastName: 'Melian',
    specialism: 'ophthalmologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a518a2de663f1b5284d347',
    name: 'Mia',
    lastName: 'San-Martin',
    specialism: 'ophthalmologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a518d5de663f1b5284d348',
    name: 'Consuelo',
    lastName: 'Ceballos',
    specialism: 'psychologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a518f1de663f1b5284d349',
    name: 'Felipa',
    lastName: 'Mohamed',
    specialism: 'psychologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5190ade663f1b5284d34a',
    name: 'Maria Natividad',
    lastName: 'Cortes',
    specialism: 'psychologist',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5192bde663f1b5284d34b',
    name: 'Ana Maria',
    lastName: 'Lora',
    specialism: 'general',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a51937de663f1b5284d34c',
    name: 'Flor Alba',
    lastName: 'Beltran',
    specialism: 'general',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a5194dde663f1b5284d34d',
    name: 'Elena Maria',
    lastName: 'Martinez',
    specialism: 'general',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a51968de663f1b5284d34e',
    name: 'Bartolome',
    lastName: 'Mancilla',
    specialism: 'general',
    __v: 0,
  },
  {
    state: true,
    availability: true,
    _id: '61a566cc943ff133ac0f2796',
    name: 'Julios M.',
    lastName: 'Hibbert',
    specialism: 'general',
    __v: 0,
  },
];

jest.mock('../models/professional.model', () => ({
  find: jest.fn().mockReturnThis(),
}));

describe(`When this endpoint get all professional`, () => {
  afterEach(() => {
    professional.find.mockRestore();
  });

  it('Should have the query paramas in path', async () => {
    professional.find.mockResolvedValue(proMocksSlice);
    const offset = 1;
    const limit = 3;
    const req = {};
    req.query = { offset, limit };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };

    await profController.find(req, res);
    expect(professional.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
    const resBody = res.json.mock.calls[0][0];
    console.log(resBody);
    expect(resBody[0]).toBe(proMocksSlice[0]);
    expect(resBody[1]).toBe(proMocksSlice[1]);
    expect(resBody[2]).toBe(proMocksSlice[2]);
  });

  it('Should have the query paramas in path with sort = asce', async () => {
    professional.find.mockResolvedValue(proMocksSlice);
    const offset = 1;
    const limit = proMocksSlice.length;
    const sort = 'asc';
    const req = {};
    req.query = { offset, limit, sort };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };

    await profController.find(req, res);
    const resBody = res.json.mock.calls[0][0];
    const theLastElementRes = resBody.pop();
    const theLastElementProMocks = proMocksSlice.pop();

    expect(professional.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
    expect(resBody[0]).toBe(proMocksSlice[0]);
    expect(theLastElementRes).toEqual(theLastElementProMocks);
  });

  it('Should have the query paramas in path with sort = desc', async () => {
    professional.find.mockResolvedValue(proMocksSlice);
    const offset = 1;
    const limit = proMocksSlice.length;
    const sort = 'desc';
    const req = {};
    req.query = { offset, limit, sort };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };

    await profController.find(req, res);
    const resBody = res.json.mock.calls[0][0];
    const theLastElementRes = resBody.pop();
    const theLastElementProMocks = proMocksSlice.pop();

    expect(professional.find).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
    expect(resBody[0]).toBe(proMocksSlice[0]);
    expect(theLastElementRes).toEqual(theLastElementProMocks);
  });
});
