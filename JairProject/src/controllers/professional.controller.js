const professional = require('../models/professional.model');
const proValidate = require('../schemas/professional.Joipost');

exports.postProfes = async (req, res) => {
  try {
    const { name, lastName, specialism } = await proValidate.validateAsync(req.body);

    const newProfessional = await new professional({
      name,
      lastName,
      specialism,
    });
    newProfessional.save();
    res.status(201).json(newProfessional);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.find = async (req, res) => {
  try {
    const { offset, limit, specialism, sort } = req.query;

    if (limit && offset) {
      const professionalFind = await professional.find();
      const professionalBySpecialims = await professional.find({ specialism });

      if (specialism) {
        if (sort === 'asc') {
          const listed = professionalBySpecialims.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return 1;
            }
            if (nameI < nameF) {
              return -1;
            }
          });
          const paginationProfessional = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(paginationProfessional);
        } else if (sort === 'desc') {
          const listed = professionalBySpecialims.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return -1;
            }
            if (nameI < nameF) {
              return 1;
            }
          });
          const paginationProfessional = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(paginationProfessional);
        } else {
          const paginationProfessional = professionalBySpecialims.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(paginationProfessional);
        }
      } else {
        if (sort === 'asc') {
          const listed = professionalFind.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return 1;
            }
            if (nameI < nameF) {
              return -1;
            }
          });
          const paginationProfessional = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(paginationProfessional);
        } else if (sort === 'desc') {
          const listed = professionalFind.sort((i, f) => {
            const nameI = i.lastName.toUpperCase();
            const nameF = f.lastName.toUpperCase();
            if (nameI > nameF) {
              return -1;
            }
            if (nameI < nameF) {
              return 1;
            }
          });
          const paginationProfessional = listed.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(paginationProfessional);
        } else {
          const paginationProfessional = professionalFind.slice((offset - 1) * limit, offset * limit);
          res.status(200).json(paginationProfessional);
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
    const deleteProfessional = await professional.findOneAndUpdate(_id, { state: state });
    res
      .status(200)
      .json({ message: `Admin you change the state of the professional with id: ${deleteProfessional._id}` });
  } catch {
    res.status(500).json({ err: '--server error---' });
  }
};
