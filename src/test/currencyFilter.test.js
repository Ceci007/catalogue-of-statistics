import deepFreeze from 'deep-freeze';
import currencyFilter from '../reducers/currencyFilter';
import { currencyUpdate, getCurrenCurrency } from '../actions/index';

it('update currency to new filtered currency', () => {
  const stateBefore = '';

  const filter = 'eur';
  const stateAfter = 'eur';

  deepFreeze(stateBefore);
  deepFreeze(currencyUpdate);

  expect(
    currencyFilter(stateBefore, currencyUpdate(filter)),
  ).toEqual(stateAfter);
});

it('get current reduxs store currency', () => {
  const stateBefore = 'ars';
  const stateAfter = 'ars';

  deepFreeze(stateBefore);
  deepFreeze(getCurrenCurrency);

  expect(
    currencyFilter(stateBefore, getCurrenCurrency()),
  ).toEqual(stateAfter);
});
