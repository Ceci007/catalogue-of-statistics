import deepFreeze from 'deep-freeze';
import mainFilter from '../reducers/mainFilter';
import { filterUpdate } from '../actions/index';

it('update filter to new filter', () => {
  const stateBefore = '';

  const filter = 'ath';
  const stateAfter = 'ath';

  deepFreeze(stateBefore);
  deepFreeze(filterUpdate);

  expect(
    mainFilter(stateBefore, filterUpdate(filter)),
  ).toEqual(stateAfter);
});
