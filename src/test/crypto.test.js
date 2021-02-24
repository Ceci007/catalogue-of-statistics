import deepFreeze from 'deep-freeze';
import crypto from '../reducers/crypto';
import { updateAssetList } from '../actions/index';

it('updates crypto asset list', () => {
  const stateBefore = [];
  const assets = [{
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
  },
  ];

  const stateAfter = [{
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
  },
  ];

  deepFreeze(stateBefore);
  deepFreeze(updateAssetList);

  expect(
    crypto(stateBefore, updateAssetList(assets)),
  ).toEqual(stateAfter);
});
