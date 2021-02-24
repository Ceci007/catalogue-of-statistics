import {
  UPDATE_ASSET_LIST, UPDATE_CRYPTO_ASSET,
  FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE,
  NEXT_PAGE, PREV_PAGE, UPDATE_PAGE,
  FILTER_UPDATE,
  CURRENCY_UPDATE,
  GET_CURRENT_CURRENCY,
} from '../helpers/help';

import fetchApiCryptoList from '../apis/coingecko';

const updateAssetList = assetList => ({
  type: UPDATE_ASSET_LIST,
  assetList,
});

const updateCryptoAsset = assetData => ({
  type: UPDATE_CRYPTO_ASSET,
  assetData,
});

const nextPage = () => ({
  type: NEXT_PAGE,
});

const prevPage = () => ({
  type: PREV_PAGE,
});

const updatePage = newPage => (
  {
    type: UPDATE_PAGE,
    page: newPage,
  }
);

const filterUpdate = filter => ({
  type: FILTER_UPDATE,
  filter,
});

const currencyUpdate = filter => ({
  type: CURRENCY_UPDATE,
  filter,
});

const getCurrenCurrency = () => ({
  type: GET_CURRENT_CURRENCY,
});

const fetchApiAssets = () => ({
  type: FETCHING_API_ASSETS,
});

const fetchApiSuccess = () => ({
  type: FETCHING_API_SUCCESS,
});

const fetchApiFailure = () => ({
  type: FETCHING_API_FAILURE,
});

const updateApiRenderList = () => (dispatch, getState) => fetchApiCryptoList(
  {
    url: null,
    currency: getState().currencyFilter,
  },
)
  .then(result => {
    dispatch(updateAssetList(result));
  }).catch(error => {
    throw (error);
  });

export {
  updateAssetList, updateCryptoAsset,
  nextPage, prevPage, updatePage,
  fetchApiAssets, fetchApiSuccess, fetchApiFailure,
  updateApiRenderList,
  filterUpdate,
  currencyUpdate,
  getCurrenCurrency,
};
