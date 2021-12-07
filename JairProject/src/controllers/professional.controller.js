const professional = require('../models/professional.model');
const proValidate = require('../schemas/professional.Joipost');

exports.postProfes = async (req, res) => {
  try {
    const { name, lastName, specialism } = await proValidate.validateAsync(req.body);

    const newPro = await new professional({
      name,
      lastName,
      specialism,
    });
    newPro.save();
    res.status(201).json(newPro);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.find = async (req, res) => {
  try {
    const { offset, limit, specialism, sort } = req.query;

    if (limit && offset) {
      const profFind = await professional.find();
      const profFindSpe = await professional.find({ specialism });

      if (specialism) {
        if (sort === 'asc') {
          const listed = profFindSpe.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return 1;
            }
            if (nameI < nameF) {
              return -1;
            }
          });
          const prosPagin = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(prosPagin);
        } else if (sort === 'desc') {
          const listed = profFindSpe.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return -1;
            }
            if (nameI < nameF) {
              return 1;
            }
          });
          const prosPagin = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(prosPagin);
        } else {
          const prosPagin = profFindSpe.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(prosPagin);
        }
      } else {
        if (sort === 'asc') {
          const listed = profFind.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return 1;
            }
            if (nameI < nameF) {
              return -1;
            }
          });
          const prosPagin = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(prosPagin);
        } else if (sort === 'desc') {
          const listed = profFind.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return -1;
            }
            if (nameI < nameF) {
              return 1;
            }
          });
          const prosPagin = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(prosPagin);
        } else {
          const prosPagin = profFind.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(prosPagin);
        }
      }
    } else {
      res.status(400).json({ err: `Please add offset and limit` });
    }
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.desabProfes = async (req, res) => {
  try {
    const { _id } = req.query;
    const { state } = req.body;
    const deletePros = await professional.findOneAndUpdate(_id, { state: state });
    res.status(200).json({ message: `Admin you change the state of the professional with id: ${deletePros._id}` });
  } catch (err) {
    res.status(404).json(err);
  }
};
