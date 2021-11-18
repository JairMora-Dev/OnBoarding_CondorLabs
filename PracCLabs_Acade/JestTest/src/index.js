function filterByTerm(arrayInput, searchTerm) {
  if (!searchTerm) {
    throw Error('searchTerm cannot be empty');
  }
  if (!arrayInput.length) {
    throw Error('inputArr cannot be empty');
  }
  const regExp = new RegExp(searchTerm, 'i'); //hacer coincidir a una expresion regular 'mayusculas con minusculas'
  return arrayInput.filter(function (elementArray) {
    return elementArray.url.match(regExp);
  });
}

module.exports = filterByTerm;
