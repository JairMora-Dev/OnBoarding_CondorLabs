const professional = require('../models/professional.model');
const proValidate = require('../helpers/prof.post');

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

exports.findProfes = async (req, res) => {
  try {
    const { offset, limit, specialism } = req.query;
    const profFindSpe = await professional.find({ specialism });

    if (specialism) {
      const prosPagin = profFindSpe.slice((offset - 1) * limit, offset * limit);
      res.status(200).json(prosPagin);
    } else {
      const profFind = await professional.find();
      const prosPagin = profFind.slice((offset - 1) * limit, offset * limit);
      res.status(200).json(prosPagin);
    }
  } catch (err) {
    res.status(404).json({ err: 'catch error' });
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
