/* eslint-disable no-nested-ternary, consistent-return */
const getInputHints = (inputValue, objectList) => {
  let keysearch = [];
  if (inputValue.length < 2) { return []; }

  keysearch = objectList.map((obj, idpos) => ({ ...obj, idpos }))
    .filter(asset => (
      asset.name
        .substr(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()))
    .map(obj => ({ name: obj.name, idpage: (Math.trunc(obj.idpos / 5) + 1) }));

  return keysearch.slice(0, (keysearch.length >= 5 ? 4 : keysearch.length));
};

const getDate = date => `${date.slice(8, 10)
}/${date.slice(5, 7)
}/${date.slice(0, 4)}`;

const textToBigCurrency = numberText => (Math.abs(numberText) >= 1.0e+9

  ? `${(Math.abs(numberText) / 1.0e+9).toFixed(2)} B`

  : Math.abs(numberText) >= 1.0e+6

    ? `${(Math.abs(numberText) / 1.0e+6).toFixed(2)} M`

    : Math.abs(numberText) >= 1.0e+3

      ? `${(Math.abs(numberText) / 1.0e+3).toFixed(2)} K`

      : (Math.abs(numberText)).toFixed(2));

const apiToKey = (api, array) => {
  // eslint-disable-next-line
  const result = array.filter(option => {
    if (option.sort === api) {
      return true;
    }
  });
  if (result.length > 0) { return result[0].key; }
};

const isEven = value => {
  if (value % 2 === 0) return true;
  return false;
};

export {
  getInputHints, getDate,
  textToBigCurrency,
  apiToKey, isEven,
};
