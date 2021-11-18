const filterByTerm = require('../src/index');

function filterNull(arrayInput, searchNull) {
  return arrayInput.filter(function (elementArray) {
    return elementArray.url.match(searchNull);
  });
}

describe('Filtro para la propuedad url del objeto input', () => {
  //metodo describe para contener una o mas pruebas relacionadas
  test('Esto deberia filtrar por busqueda el String (link)', () => {
    //inicio test
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ]; //terminos de salida

    const output = [{ id: 3, url: 'https://www.link3.dev' }]; //termino de comparacion

    expect(filterByTerm(input, 'link')).toEqual(output);
    expect(filterByTerm(input, 'LiNK')).toEqual(output);
  });

  test('Debe verificar si el termino "uRl" existe en el objeto input', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ];

    const output = input.filter((dir) => dir.id < 3);

    expect(filterByTerm(input, 'uRl')).toEqual(output);
  });

  test('Debe verificar si la propuedad url esta vacia', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ];

    const outputNull = input.filter((dirNull) => dirNull.url === 0);

    expect(filterNull(input, 0)).toEqual(outputNull);
  });
});
