import deepFreeze from 'deep-freeze';
import cryptoApi from '../reducers/cryptoApi';
import { FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE } from '../helpers/help';
import { fetchApiAssets, fetchApiSuccess, fetchApiFailure } from '../actions/index';

it('fetch API Asset list update', () => {
  const stateBefore = [];
  const stateAfter = {
    fetching: true,
    updated: false,
    apiError: false,
    status: FETCHING_API_ASSETS,
  };

  deepFreeze(stateBefore);
  deepFreeze(fetchApiAssets);

  expect(
    cryptoApi(stateBefore, fetchApiAssets()),
  ).toEqual(stateAfter);
});

it('fetch API success call', () => {
  const stateBefore = [];
  const stateAfter = {
    fetching: false,
    updated: true,
    apiError: false,
    status: FETCHING_API_SUCCESS,
  };

  deepFreeze(stateBefore);
  deepFreeze(fetchApiSuccess);

  expect(
    cryptoApi(stateBefore, fetchApiSuccess()),
  ).toEqual(stateAfter);
});

it('fetch API failure call', () => {
  const stateBefore = [];
  const stateAfter = {
    fetching: false,
    updated: false,
    apiError: true,
    status: FETCHING_API_FAILURE,
  };

  deepFreeze(stateBefore);
  deepFreeze(fetchApiFailure);

  expect(
    cryptoApi(stateBefore, fetchApiFailure()),
  ).toEqual(stateAfter);
});
