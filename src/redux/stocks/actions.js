import axios from 'axios';
import {
  CHANGE_SEARCH_FIELD, GET_COMPANY_INFO, GET_STOCKS, RETURN_TO_STOCKS_PAGE,
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const getStocks = () => async (dispatch) => {
  const url = 'https://financialmodelingprep.com/api/v3/available-traded/list?apikey=873d9f587bdffd1f6846940b1db9e012';
  const result = await axios.get(url);
  const { data } = result;
  const stocks = data.slice(0, 200);
  dispatch({
    type: GET_STOCKS,
    stocks,
  });
};

export const getCompanyInfo = (symbol) => async (dispatch) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=873d9f587bdffd1f6846940b1db9e012`;
  const result = await axios.get(url);
  const company = result.data;
  dispatch({
    type: GET_COMPANY_INFO,
    company,
  });
};

export const returnToStocks = () => async (dispatch) => {
  dispatch({
    type: RETURN_TO_STOCKS_PAGE,
  });
};
